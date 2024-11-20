import React from 'react';
import { LayoutDashboard, Briefcase, Calendar, Users, FileText, Settings } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, current: true },
  { name: 'Cases', icon: Briefcase, current: false },
  { name: 'Calendar', icon: Calendar, current: false },
  { name: 'Clients', icon: Users, current: false },
  { name: 'Documents', icon: FileText, current: false },
  { name: 'Settings', icon: Settings, current: false },
];

export default function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-col flex-grow bg-gray-50 pt-5 overflow-y-auto">
        <div className="flex-grow flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md
                  ${
                    item.current
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                <item.icon
                  className={`
                    mr-3 h-6 w-6
                    ${item.current ? 'text-white' : 'text-gray-400 group-hover:text-gray-500'}
                  `}
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}