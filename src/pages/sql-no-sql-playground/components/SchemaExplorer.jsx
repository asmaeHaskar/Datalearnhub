import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SchemaExplorer = ({ selectedDb }) => {
  const [expandedTables, setExpandedTables] = useState(['users']);

  const schemas = {
    mysql: [
      {
        name: 'users',
        columns: [
          { name: 'id', type: 'INT', key: 'PK' },
          { name: 'username', type: 'VARCHAR(50)', key: '' },
          { name: 'email', type: 'VARCHAR(100)', key: 'UNIQUE' },
          { name: 'created_at', type: 'TIMESTAMP', key: '' }
        ]
      },
      {
        name: 'orders',
        columns: [
          { name: 'id', type: 'INT', key: 'PK' },
          { name: 'user_id', type: 'INT', key: 'FK' },
          { name: 'total', type: 'DECIMAL(10,2)', key: '' },
          { name: 'status', type: 'VARCHAR(20)', key: '' }
        ]
      },
      {
        name: 'products',
        columns: [
          { name: 'id', type: 'INT', key: 'PK' },
          { name: 'name', type: 'VARCHAR(100)', key: '' },
          { name: 'price', type: 'DECIMAL(10,2)', key: '' },
          { name: 'stock', type: 'INT', key: '' }
        ]
      }
    ],
    postgresql: [
      {
        name: 'customers',
        columns: [
          { name: 'id', type: 'SERIAL', key: 'PK' },
          { name: 'name', type: 'VARCHAR(100)', key: '' },
          { name: 'email', type: 'VARCHAR(100)', key: 'UNIQUE' },
          { name: 'country', type: 'VARCHAR(50)', key: '' }
        ]
      },
      {
        name: 'transactions',
        columns: [
          { name: 'id', type: 'SERIAL', key: 'PK' },
          { name: 'customer_id', type: 'INT', key: 'FK' },
          { name: 'amount', type: 'NUMERIC(12,2)', key: '' },
          { name: 'date', type: 'DATE', key: '' }
        ]
      }
    ],
    mongodb: [
      {
        name: 'users',
        columns: [
          { name: '_id', type: 'ObjectId', key: 'PK' },
          { name: 'username', type: 'String', key: '' },
          { name: 'profile', type: 'Object', key: '' },
          { name: 'tags', type: 'Array', key: '' }
        ]
      },
      {
        name: 'posts',
        columns: [
          { name: '_id', type: 'ObjectId', key: 'PK' },
          { name: 'title', type: 'String', key: '' },
          { name: 'content', type: 'String', key: '' },
          { name: 'author_id', type: 'ObjectId', key: 'FK' }
        ]
      }
    ],
    redis: [
      {
        name: 'session:*',
        columns: [
          { name: 'key', type: 'String', key: 'PK' },
          { name: 'value', type: 'String/Hash', key: '' },
          { name: 'ttl', type: 'Integer', key: '' }
        ]
      },
      {
        name: 'cache:*',
        columns: [
          { name: 'key', type: 'String', key: 'PK' },
          { name: 'value', type: 'String', key: '' }
        ]
      }
    ]
  };

  const currentSchema = schemas?.[selectedDb] || [];

  const toggleTable = (tableName) => {
    setExpandedTables(prev => 
      prev?.includes(tableName) 
        ? prev?.filter(t => t !== tableName)
        : [...prev, tableName]
    );
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden h-full flex flex-col">
      <div className="px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <Icon name="Database" size={18} className="text-primary" />
          <span className="text-sm font-medium text-text-primary">Schéma de Base de Données</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-custom p-4 space-y-2">
        {currentSchema?.map((table) => (
          <div key={table?.name} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleTable(table?.name)}
              className="w-full flex items-center justify-between px-3 py-2 bg-muted/30 hover:bg-muted/50 transition-smooth"
            >
              <div className="flex items-center gap-2">
                <Icon name="Table" size={16} className="text-accent" />
                <span className="text-sm font-medium text-text-primary">{table?.name}</span>
              </div>
              <Icon 
                name={expandedTables?.includes(table?.name) ? 'ChevronDown' : 'ChevronRight'} 
                size={16} 
                className="text-text-secondary"
              />
            </button>

            {expandedTables?.includes(table?.name) && (
              <div className="p-2 space-y-1">
                {table?.columns?.map((column) => (
                  <div 
                    key={column?.name}
                    className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-muted/30 transition-smooth"
                  >
                    <div className="flex items-center gap-2">
                      <Icon name="Columns" size={12} className="text-text-secondary" />
                      <span className="text-xs font-mono text-text-primary">{column?.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-text-secondary">{column?.type}</span>
                      {column?.key && (
                        <span className={`
                          text-xs px-1.5 py-0.5 rounded font-medium
                          ${column?.key === 'PK' ? 'bg-primary/20 text-primary' : ''}
                          ${column?.key === 'FK' ? 'bg-accent/20 text-accent' : ''}
                          ${column?.key === 'UNIQUE' ? 'bg-warning/20 text-warning' : ''}
                        `}>
                          {column?.key}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemaExplorer;