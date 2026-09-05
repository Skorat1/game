import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Layers,
  PlusCircle,
  Radio,
  Activity,
  Globe,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppConfig } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  const { apps } = useAppConfig();
  const { user, logout } = useAuth();


  const activeCount = apps.filter((a) => a.status === 'active').length;
  const adsOnCount = apps.filter((a) => a.isMasterAdsEnabled).length;

  const navItems = [
    {
      name: 'All Applications',
      href: '/apps',
      icon: Layers,
      count: apps.length,
      isActive: pathname === '/apps' || pathname === '/' || (pathname.startsWith('/apps/') && !pathname.includes('/new')),
    },
    {
      name: 'Add New App',
      href: '/apps/new',
      icon: PlusCircle,
      isActive: pathname === '/apps/new',
    },
    {
      name: 'Ad Networks',
      href: '/networks',
      icon: Globe,
      count: 5,
      isActive: pathname === '/networks',
    },
  ];

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800/80 flex flex-col shrink-0 h-screen sticky top-0 z-30 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
        <Link to="/apps" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-600/25 group-hover:scale-105 transition-transform">
            <Radio className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[15px] tracking-tight text-white leading-tight">
              AdEngine
            </h1>
            <p className="text-[12px] font-medium text-slate-400 leading-tight mt-0.5">
              Admin Control
            </p>
          </div>
        </Link>
      </div>

      {/* Quick Status Stats Card */}
      <div className="p-3.5 mx-3 my-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 px-1">
          <span className="font-medium flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-indigo-400" />
            Fleet Status
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shadow-sm shadow-emerald-400/50"></span>
            Real-Time
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block font-medium">Active Apps</span>
            <span className="font-bold text-slate-100 text-sm mt-0.5 block">
              {activeCount} <span className="text-[10px] text-slate-400 font-normal">/ {apps.length}</span>
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block font-medium">Ads Enabled</span>
            <span className="font-bold text-emerald-400 text-sm mt-0.5 block">{adsOnCount}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 px-3 py-2 space-y-1.5 overflow-y-auto">
        <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Management
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.isActive;

          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 relative group',
                isActive
                  ? 'bg-indigo-600/15 text-indigo-200 border border-indigo-500/30 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
              )}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    'w-4 h-4 transition-colors',
                    isActive ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-300'
                  )}
                />
                <span>{item.name}</span>
              </div>
              {item.count !== undefined && (
                <span
                  className={cn(
                    'text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold transition-colors',
                    isActive
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      : 'bg-slate-900 text-slate-400 border border-slate-800'
                  )}
                >
                  {item.count}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* User Profile & Logout */}
      <div className="p-3 border-t border-slate-800/80 mt-auto">
        <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-indigo-500/20 shrink-0">
              A
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">
                {user?.name || 'Super Admin'}
              </p>
              <p className="text-[10px] text-slate-400 truncate">
                {user?.email || 'admin@adengine.com'}
              </p>
            </div>
          </div>
          <button
            onClick={logout}
            title="Sign Out"
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors shrink-0"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

