// Data SDK - Simple implementation for local storage
window.dataSdk = {
  dataHandler: null, // Store handler reference
  
  async init(dataHandler) {
    try {
      // Load data from localStorage
      let data = [];
      const storedData = localStorage.getItem('apartment_management_data');
      
      if (storedData) {
        try {
          data = JSON.parse(storedData);
          // Ensure data is an array
          if (!Array.isArray(data)) {
            console.warn('Data is not an array, resetting to empty array');
            data = [];
            localStorage.setItem('apartment_management_data', JSON.stringify([]));
          }
        } catch (parseError) {
          console.error('Error parsing stored data:', parseError);
          console.error('Corrupted data:', storedData);
          // Reset corrupted data
          data = [];
          localStorage.setItem('apartment_management_data', JSON.stringify([]));
        }
      }
      
      // Store handler for updates
      if (dataHandler) {
        this.dataHandler = dataHandler;
        window.dataSdk.dataHandler = dataHandler; // Also store on window for direct access
      }
      
      // Initialize data handler
      if (dataHandler && typeof dataHandler.onDataChanged === 'function') {
        try {
          dataHandler.onDataChanged(data);
        } catch (handlerError) {
          console.error('Error calling dataHandler.onDataChanged:', handlerError);
        }
      }
      
      return { isOk: true };
    } catch (error) {
      console.error('Data SDK init error:', error);
      console.error('Error stack:', error.stack);
      return { isOk: false, error: error.message };
    }
  },
  
  async create(item) {
    try {
      // Validate item
      if (!item || typeof item !== 'object') {
        return { isOk: false, error: 'Invalid item: must be an object' };
      }
      
      let data = [];
      const storedData = localStorage.getItem('apartment_management_data');
      
      if (storedData) {
        try {
          data = JSON.parse(storedData);
          if (!Array.isArray(data)) {
            data = [];
          }
        } catch (parseError) {
          console.error('Error parsing stored data in create:', parseError);
          data = [];
        }
      }
      
      // Generate unique ID
      item.__backendId = 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      
      data.push(item);
      
      try {
        localStorage.setItem('apartment_management_data', JSON.stringify(data));
      } catch (storageError) {
        console.error('Error saving to localStorage:', storageError);
        return { isOk: false, error: storageError.message || 'Storage error' };
      }
      
      // Notify handler - try multiple ways to ensure it's called
      const handler = this.dataHandler || window.dataSdk.dataHandler;
      if (handler && typeof handler.onDataChanged === 'function') {
        try {
          handler.onDataChanged(data);
        } catch (handlerError) {
          console.error('Error calling handler.onDataChanged:', handlerError);
        }
      }
      
      return { isOk: true, data: item };
    } catch (error) {
      console.error('Data SDK create error:', error);
      console.error('Error stack:', error.stack);
      return { isOk: false, error: error.message };
    }
  },
  
  async update(item) {
    try {
      const storedData = localStorage.getItem('apartment_management_data');
      const data = storedData ? JSON.parse(storedData) : [];
      
      const index = data.findIndex(d => d.__backendId === item.__backendId);
      if (index !== -1) {
        data[index] = item;
        localStorage.setItem('apartment_management_data', JSON.stringify(data));
        
        // Notify handler
        const handler = this.dataHandler || window.dataSdk.dataHandler;
        if (handler && handler.onDataChanged) {
          handler.onDataChanged(data);
        }
        
        return { isOk: true, data: item };
      }
      
      return { isOk: false, error: 'Item not found' };
    } catch (error) {
      console.error('Data SDK update error:', error);
      return { isOk: false, error: error.message };
    }
  },
  
  async delete(item) {
    try {
      const storedData = localStorage.getItem('apartment_management_data');
      const data = storedData ? JSON.parse(storedData) : [];
      
      const filteredData = data.filter(d => d.__backendId !== item.__backendId);
      localStorage.setItem('apartment_management_data', JSON.stringify(filteredData));
      
      // Notify handler
      const handler = this.dataHandler || window.dataSdk.dataHandler;
      if (handler && handler.onDataChanged) {
        handler.onDataChanged(filteredData);
      }
      
      return { isOk: true };
    } catch (error) {
      console.error('Data SDK delete error:', error);
      return { isOk: false, error: error.message };
    }
  }
};

