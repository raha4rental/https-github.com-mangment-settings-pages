// Data SDK - Simple implementation for local storage
window.dataSdk = {
  dataHandler: null, // Store handler reference
  
  async init(dataHandler) {
    try {
      // Load data from localStorage
      const storedData = localStorage.getItem('apartment_management_data');
      const data = storedData ? JSON.parse(storedData) : [];
      
      // Store handler for updates
      this.dataHandler = dataHandler;
      window.dataSdk.dataHandler = dataHandler; // Also store on window for direct access
      
      // Initialize data handler
      if (dataHandler && dataHandler.onDataChanged) {
        dataHandler.onDataChanged(data);
      }
      
      return { isOk: true };
    } catch (error) {
      console.error('Data SDK init error:', error);
      return { isOk: false, error: error.message };
    }
  },
  
  async create(item) {
    try {
      const storedData = localStorage.getItem('apartment_management_data');
      const data = storedData ? JSON.parse(storedData) : [];
      
      // Generate unique ID
      item.__backendId = 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      
      data.push(item);
      localStorage.setItem('apartment_management_data', JSON.stringify(data));
      
      // Notify handler - try multiple ways to ensure it's called
      const handler = this.dataHandler || window.dataSdk.dataHandler;
      if (handler && handler.onDataChanged) {
        handler.onDataChanged(data);
      }
      
      return { isOk: true, data: item };
    } catch (error) {
      console.error('Data SDK create error:', error);
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

