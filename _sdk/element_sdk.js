// Element SDK - Simple implementation for UI customization
window.elementSdk = {
  config: {},
  defaultConfig: {},
  onConfigChange: null,
  
  init(options) {
    this.defaultConfig = options.defaultConfig || {};
    this.onConfigChange = options.onConfigChange || null;
    this.mapToCapabilities = options.mapToCapabilities || (() => ({}));
    this.mapToEditPanelValues = options.mapToEditPanelValues || (() => new Map());
    
    // Load config from localStorage
    const storedConfig = localStorage.getItem('apartment_management_config');
    if (storedConfig) {
      try {
        this.config = JSON.parse(storedConfig);
        if (this.onConfigChange) {
          this.onConfigChange(this.config);
        }
      } catch (e) {
        console.error('Error loading config:', e);
      }
    }
    
    return { isOk: true };
  },
  
  setConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    localStorage.setItem('apartment_management_config', JSON.stringify(this.config));
    
    if (this.onConfigChange) {
      this.onConfigChange(this.config);
    }
    
    return { isOk: true };
  },
  
  getConfig() {
    return { ...this.defaultConfig, ...this.config };
  }
};

