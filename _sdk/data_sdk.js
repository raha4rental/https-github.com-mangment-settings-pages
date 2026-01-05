// Data SDK - Simple implementation for local storage
window.dataSdk = {
  async init(dataHandler) {
    try {
      // Load data from localStorage
      const storedData = localStorage.getItem('apartment_management_data');
      const data = storedData ? JSON.parse(storedData) : [];
      
      // Initialize data handler
      if (dataHandler && dataHandler.onDataChanged) {
        dataHandler.onDataChanged(data);
      }
      
      // Store handler for updates
      this.dataHandler = dataHandler;
      
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
      
      // Notify handler
      if (this.dataHandler && this.dataHandler.onDataChanged) {
        this.dataHandler.onDataChanged(data);
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
        if (this.dataHandler && this.dataHandler.onDataChanged) {
          this.dataHandler.onDataChanged(data);
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
      if (this.dataHandler && this.dataHandler.onDataChanged) {
        this.dataHandler.onDataChanged(filteredData);
      }
      
      return { isOk: true };
    } catch (error) {
      console.error('Data SDK delete error:', error);
      return { isOk: false, error: error.message };
    }
  }
};

