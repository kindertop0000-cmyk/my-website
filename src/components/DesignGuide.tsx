
import React from 'react';
import { X, Printer, Palette, Type, Layout, Move } from 'lucide-react';

interface DesignGuideProps {
  onClose: () => void;
  isRTL: boolean; // New prop to determine text direction
}

export const DesignGuide: React.FC<DesignGuideProps> = ({ onClose, isRTL }) => {
  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto bg-black flex justify-center p-4 sm:p-10 animate-page-enter">
      <div className={`max-w-4xl w-full bg-white text-black rounded-[3rem] p-12 shadow-2xl relative print:shadow-none print:m-0 print:p-8 ${isRTL ? 'font-arabic' : 'font-premium-sans'}`}>
        
        {/* Actions */}
        <div className="absolute top-8 left-8 flex gap-4 print:hidden">
          <button onClick={() => window.print()} className="p-3 bg-gray-100 rounded-full hover:bg-secondary hover:text-white transition-all">
            <Printer size={20} />
          </button>
          <button onClick={onClose} className="p-3 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition-all">
            <X size={20} />
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-16 pt-10">
          <h1 className="text-4xl font-black tracking-tighter mb-4">DESIGN SYSTEM SPECIFICATION</h1>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs">Emad Hadid Luxury Digital Identity v1.0</p>
          <div className="h-1 w-20 bg-secondary mx-auto mt-6"></div>
        </div>

        {/* Section: Colors */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Palette className="text-secondary" />
            <h2 className="text-xl font-bold uppercase tracking-wider">Color Palette</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6"> {/* Changed to 4 columns for new colors */}
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-[#020202] border border-gray-200"></div>
              <p className="font-bold text-sm">Primary Black</p>
              <p className="text-xs text-gray-400">#020202</p>
            </div>
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-[#a66526] border border-gray-200"></div>
              <p className="font-bold text-sm">Signature Gold</p>
              <p className="text-xs text-gray-400">#a66526</p>
            </div>
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-[#594c44] border border-gray-200"></div> {/* NEW ACCENT BROWN */}
              <p className="font-bold text-sm">Accent Brown</p>
              <p className="text-xs text-gray-400">#594c44</p>
            </div>
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-[#1e1e1e] border border-gray-200"></div> {/* UPDATED DARK SURFACE */}
              <p className="font-bold text-sm">Charcoal Surface</p>
              <p className="text-xs text-gray-400">#1e1e1e</p>
            </div>
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-[#d4af37] border border-gray-200"></div>
              <p className="font-bold text-sm">Bright Gold Accent</p>
              <p className="text-xs text-gray-400">#d4af37</p>
            </div>
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-[#0f4c5c] border border-gray-200"></div> {/* Tertiary Sapphire Blue */}
              <p className="font-bold text-sm">Sapphire Blue (Tertiary)</p>
              <p className="text-xs text-gray-400">#0f4c5c</p>
            </div>
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-gray-100 border border-gray-200"></div>
              <p className="font-bold text-sm">Soft Surface</p>
              <p className="text-xs text-gray-400">#F3F4F6</p>
            </div>
          </div>
        </div>

        {/* Section: Typography */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Type className="text-secondary" />
            <h2 className="text-xl font-bold uppercase tracking-wider">Typography</h2>
          </div>
          <div className="space-y-10">
            <div className="border-b border-gray-100 pb-6">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">Arabic Main Font</p>
              <p className="text-3xl font-black font-arabic">Alexandria - أبجد هوز حطي كلمن</p>
              <p className="text-sm text-gray-500 mt-2">Weight: 100 to 900 | Line Height: 1.8</p>
            </div>
            <div className="border-b border-gray-100 pb-6">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">Latin Main Font</p>
              <p className="text-3xl font-black">Plus Jakarta Sans - ABCDEFGHIJKLMNOP</p>
              <p className="text-sm text-gray-500 mt-2">Weight: 200 to 800 | Letter Spacing: -0.015em</p>
            </div>
          </div>
        </div>

        {/* Section: UI Components */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Layout className="text-secondary" />
            <h2 className="text-xl font-bold uppercase tracking-wider">UI Programming</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="p-6 bg-gray-50 rounded-3xl">
              <p className="font-bold mb-2">Border Radius</p>
              <p className="text-gray-600">Standard: 2.5rem (40px)<br/>Small: 1rem (16px)</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-3xl">
              <p className="font-bold mb-2">Shadows & Depth</p>
              <p className="text-gray-600">Soft: 0 40px 100px rgba(0,0,0,0.1)<br/>Hard: 0 50px 120px rgba(0,0,0,1)</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-3xl">
              <p className="font-bold mb-2">Grid System</p>
              <p className="text-gray-600">Max Width: 1280px<br/>Base Unit: 8px</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-3xl">
              <p className="font-bold mb-2">Blur Effects</p>
              <p className="text-gray-600">Glass: blur(30px)<br/>Atmosphere: blur(150px)</p>
            </div>
          </div>
        </div>

        {/* Section: Animation */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-8">
            <Move className="text-secondary" />
            <h2 className="text-xl font-bold uppercase tracking-wider">Motion Philosophy</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Transitions must feel liquid and weightless. Use <code className="bg-gray-100 px-2 py-1 rounded">cubic-bezier(0.2, 1, 0.3, 1)</code> for all entry animations to create a "premium spring" effect. 
            Default duration for section entries is <span className="font-bold">1200ms</span>.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 tracking-widest">© {new Date().getFullYear()} Emad Hadid Digital Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
