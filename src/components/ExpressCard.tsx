import './ExpressCard.css'

const ExpressCodeEditor = () => {
  // Line numbers 01 to 14
  const lines = Array.from({ length: 14 }, (_, i) => 
    (i + 1).toString().padStart(2, '0')
  );

  return (
      <div className="expresscard w-full max-w-[600px] md:max-w-[700px] lg:max-w-3xl hover:rotate-2 transform transition-transform duration-300 rounded-xl bg-[#0c1423] border border-slate-800/50 overflow-hidden font-mono">
        
        {/* Header Section */}
        <div className="p-4 sm:p-5 flex flex-col gap-4 sm:gap-6">
          {/* Window Controls */}
          <div className="flex gap-2 opacity-40">
            <div className="w-3 h-3 rounded-full border border-slate-600"></div>
            <div className="w-3 h-3 rounded-full border border-slate-600"></div>
            <div className="w-3 h-3 rounded-full border border-slate-600"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-8 items-center text-xs sm:text-sm ml-1 sm:ml-2">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 -mx-3 -my-1 bg-blue-500/10 border border-blue-500/30 rounded-full"></div>
              <span className="relative text-blue-400 font-medium">hello.js</span>
            </div>
          </div>
        </div>

        {/* Code Content Area */}
        <div className="px-3 sm:px-6 pb-5 sm:pb-8 pt-2 flex text-[12px] sm:text-[15px] leading-relaxed overflow-x-hidden sm:overflow-x-auto">
          {/* Gutter */}
          <div className="pr-3 sm:pr-8 text-slate-700 text-right select-none border-r border-slate-800/30">
            {lines.map((num) => (
              <div key={num}>{num}</div>
            ))}
          </div>

          {/* Syntax Highlighted Express Code */}
          <div className="pl-3 sm:pl-6 text-slate-300 whitespace-pre-wrap sm:whitespace-pre break-words sm:break-normal w-full">
            <div>
              <span className="text-green-500">const</span> express = <span className="text-pink-300">require</span>(<span className="text-sky-300">'express'</span>);
            </div>
            <div>
              <span className="text-green-500">const</span> app = <span className="text-pink-300">express</span>();
            </div>
            <br />
            <div>
              app.<span className="text-white">get</span>(<span className="text-sky-300">'/api/data'</span>, (req, res) ={">"} {"{"}
            </div>
            <div>
              &nbsp;&nbsp;res.<span className="text-white">json</span>({"{"}
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;message: 
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">'Hello, World! I am Rohit'</span>, 
            </div>
            <div>
              &nbsp;&nbsp;{"}"});
            </div>
            <div>{"}"});</div>
            <br />
            <div>
              <span className="text-green-500">const</span> PORT = process.env.PORT || <span className="text-orange-300">5000</span>;
            </div>
            <br />
            <div>
              app.<span className="text-white">listen</span>(PORT, () ={">"} {"{"}
            </div>
            <div>
              &nbsp;&nbsp;console.<span className="text-white">log</span>(<span className="text-sky-300">`Server is running on {"${PORT}"}`</span>);
            </div>
            <div>{"}"});</div>
          </div>
        </div>
      </div>
  );
};

export default ExpressCodeEditor;
