import React from 'react';
import { Download, Server, Settings, Database, Play, Pause, RefreshCw, Globe, Info } from 'lucide-react';

const OllamaVSCodePlugin = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans text-gray-800">
      {/* VS Code Window */}
      <div className="flex flex-1 border border-gray-300 rounded-md overflow-hidden shadow-lg bg-white">
        {/* Activity Bar */}
        <div className="w-12 bg-gray-800 flex flex-col items-center py-4 space-y-4">
          <div className="p-2 rounded-md bg-blue-500 text-white">
            <Server size={20} />
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-300 bg-gray-100">
          <div className="p-3 border-b border-gray-300 flex justify-between items-center bg-gray-200">
            <span className="font-semibold">OLLAMA MODELS</span>
            <Settings size={16} className="text-gray-600" />
          </div>
          
          {/* Model List */}
          <div className="p-2">
            <div className="mb-4">
              <div className="flex items-center p-2 bg-blue-100 rounded-md mb-2 border-l-4 border-blue-500">
                <Database size={16} className="mr-2 text-blue-600" />
                <span className="font-medium text-blue-800">granite3.3:8b</span>
                <div className="ml-auto flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-xs text-green-600">Running</span>
                </div>
              </div>
              
              <div className="flex items-center p-2 rounded-md mb-2 hover:bg-gray-200">
                <Database size={16} className="mr-2 text-gray-600" />
                <span className="font-medium">mistral:7b</span>
                <div className="ml-auto flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
                  <span className="text-xs text-gray-600">Stopped</span>
                </div>
              </div>
              
              <div className="flex items-center p-2 rounded-md mb-2 hover:bg-gray-200">
                <Database size={16} className="mr-2 text-gray-600" />
                <span className="font-medium">codellama:13b</span>
                <div className="ml-auto flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
                  <span className="text-xs text-gray-600">Stopped</span>
                </div>
              </div>
              
              <div className="flex justify-center mt-4">
                <button className="flex items-center text-sm bg-blue-500 text-white px-3 py-1 rounded-md">
                  <Download size={14} className="mr-1" />
                  Add Model
                </button>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="text-sm font-semibold mb-2 text-gray-600 px-2">MODEL ACTIONS</div>
              <div className="bg-white rounded-md shadow-sm p-3 space-y-3">
                <button className="flex items-center w-full text-sm text-left p-2 hover:bg-gray-100 rounded-md">
                  <Play size={16} className="mr-2 text-green-600" />
                  <span>Start Selected Model</span>
                </button>
                <button className="flex items-center w-full text-sm text-left p-2 hover:bg-gray-100 rounded-md">
                  <Pause size={16} className="mr-2 text-red-600" />
                  <span>Stop Running Model</span>
                </button>
                <button className="flex items-center w-full text-sm text-left p-2 hover:bg-gray-100 rounded-md">
                  <RefreshCw size={16} className="mr-2 text-blue-600" />
                  <span>Refresh Model List</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-300 bg-gray-100">
            <h2 className="text-xl font-semibold mb-2">Ollama Model Management</h2>
            <div className="text-sm text-gray-600">Manage your local Ollama models and API endpoints</div>
          </div>
          
          <div className="p-6 flex-1 overflow-auto">
            {/* Model Details Panel */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-blue-800">granite3.3:8b</h3>
                  <p className="text-sm text-gray-600">IBM's Granite 3.3 (8B parameter model)</p>
                </div>
                <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Running on port 11434
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-xs text-gray-500 mb-1">MODEL SIZE</div>
                  <div className="font-medium">4.8 GB</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-xs text-gray-500 mb-1">MEMORY USAGE</div>
                  <div className="font-medium">3.2 GB / 16 GB</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-xs text-gray-500 mb-1">API ENDPOINT</div>
                  <div className="font-medium text-blue-600">http://localhost:11434/api/generate</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-xs text-gray-500 mb-1">VERSION</div>
                  <div className="font-medium">Ollama v0.2.12</div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex items-center bg-red-100 text-red-800 px-3 py-2 rounded-md text-sm">
                  <Pause size={16} className="mr-2" />
                  Stop Model
                </button>
                <button className="flex items-center bg-blue-100 text-blue-800 px-3 py-2 rounded-md text-sm">
                  <Globe size={16} className="mr-2" />
                  Test API
                </button>
                <button className="flex items-center bg-gray-100 text-gray-800 px-3 py-2 rounded-md text-sm">
                  <Info size={16} className="mr-2" />
                  View Model Details
                </button>
              </div>
            </div>
            
            {/* Model Download Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold mb-4">Download New Models</h3>
              <div className="mb-4">
                <div className="text-sm mb-2">Search available models:</div>
                <div className="flex">
                  <input 
                    type="text" 
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="e.g., llama3, mistral, phi..."
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
                    Search
                  </button>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 p-3 border-b border-gray-200 font-medium">
                  Popular Models
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <div className="font-medium">llama3:70b</div>
                      <div className="text-xs text-gray-600">Meta's largest Llama 3 model</div>
                    </div>
                    <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm flex items-center">
                      <Download size={14} className="mr-1" />
                      Download (35GB)
                    </button>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <div className="font-medium">codellama:34b</div>
                      <div className="text-xs text-gray-600">Code-focused large language model</div>
                    </div>
                    <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm flex items-center">
                      <Download size={14} className="mr-1" />
                      Download (19GB)
                    </button>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <div className="font-medium">mistral:7b-instruct</div>
                      <div className="text-xs text-gray-600">Instruction-tuned Mistral model</div>
                    </div>
                    <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm flex items-center">
                      <Download size={14} className="mr-1" />
                      Download (4.1GB)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="h-6 bg-blue-600 text-white px-4 flex items-center justify-between text-xs">
        <div className="flex items-center">
          <Server size={12} className="mr-1" />
          <span>Ollama: 1 model running (granite3.3:8b)</span>
        </div>
        <div>Port: 11434 | API: Ready</div>
      </div>
    </div>
  );
};

export default OllamaVSCodePlugin;