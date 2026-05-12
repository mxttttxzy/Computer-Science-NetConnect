import React, { useState } from 'react';
import { 
  Globe, 
  Database, 
  Server, 
  Sliders, 
  Code2, 
  FileText,
  Lightbulb,
  ExternalLink,
  PlayCircle,
  Play,
  Layers,
  Network,
  ShieldCheck,
  Zap,
  Minimize2,
  BookOpen,
  HelpCircle,
  Link as LinkIcon,
  Video,
  ListChecks,
  ChevronRight,
  Info,
  Clock,
  MapPin,
  Cpu
} from 'lucide-react';

// --- SUBCOMPONENT: EXERCISE CARD WITH 4 TABS ---
const ExerciseCard = ({ ex, idx }) => {
  const [activeTab, setActiveTab] = useState('task');

  const tabs = [
    { id: 'task', label: 'Objective', icon: <Play className="w-3.5 h-3.5" /> },
    { id: 'details', label: 'Technical Details', icon: <FileText className="w-3.5 h-3.5" /> },
    { id: 'questions', label: 'IB Style Questions', icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { id: 'keywords', label: 'Glossary', icon: <BookOpen className="w-3.5 h-3.5" /> }
  ];

  return (
    <div className="relative flex items-start group mt-10 first:mt-0">
      <div className="absolute left-0 md:left-4 flex flex-col items-center justify-center z-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 border-4 border-[#f5f5f7] text-white shadow-sm font-bold text-[15px]">
          {idx + 1}
        </div>
      </div>
      <div className="absolute left-5 md:left-[35px] top-10 bottom-[-2.5rem] w-0.5 bg-gray-200 group-last:hidden"></div>
      
      <div className="ml-14 md:ml-20 w-full bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="mb-6">
          <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            IB Syllabus 3.1.{ex.id}
          </span>
          <h4 className="text-2xl font-bold text-gray-900 mt-3">{ex.title}</h4>
        </div>

        <div className="flex flex-wrap gap-1 mb-6 bg-gray-100 p-1.5 rounded-2xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="prose prose-blue max-w-none min-h-[160px]">
          {activeTab === 'task' && (
            <div className="animate-in fade-in duration-300">
              <p className="text-gray-600 text-lg leading-relaxed">{ex.description}</p>
              {ex.context && (
                <div className="mt-4 p-4 bg-gray-50 rounded-2xl border-l-4 border-blue-500 italic text-gray-600">
                  "{ex.context}"
                </div>
              )}
            </div>
          )}

          {activeTab === 'details' && (
            <div className="animate-in slide-in-from-bottom-2 duration-300 grid grid-cols-1 md:grid-cols-2 gap-4">
              {ex.keyPoints.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span className="text-blue-900 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'questions' && (
            <div className="animate-in zoom-in-95 duration-300 space-y-4">
              {ex.questions.map((q, qIdx) => (
                <div key={qIdx} className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100">
                  <p className="text-orange-900 font-bold mb-2">Question {qIdx + 1}:</p>
                  <p className="text-orange-800 mb-4">{q.text}</p>
                  <div className="flex gap-4">
                    <button onClick={() => alert(`Hint: ${q.hint}`)} className="text-xs font-bold text-orange-600 underline">View Hint</button>
                    <button onClick={() => alert(`Sample Answer: ${q.answer}`)} className="text-xs font-bold text-orange-600 underline">View Answer</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'keywords' && (
            <div className="animate-in fade-in duration-300 grid grid-cols-2 md:grid-cols-3 gap-3">
              {ex.keywords.map((kw, kIdx) => (
                <div key={kIdx} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-gray-900 block text-xs mb-1 uppercase tracking-tighter">{kw.term}</span>
                  <span className="text-[11px] text-gray-500 leading-tight">{kw.definition}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TopicThreeNetworks = () => {
  const [activeSidebar, setActiveSidebar] = useState('resources');

  const curriculumData = [
    {
      id: "1",
      title: "Network Types (Geographical)",
      description: "Classification of networks based on physical distance and ownership.",
      context: "From Personal Area Networks to Global Wide Area Networks.",
      keyPoints: [
        "PAN (Personal): 1-10m range (e.g., Bluetooth earbuds).",
        "LAN (Local): Limited area like a home/office (Ethernet/Wi-Fi).",
        "CAN (Campus): Interconnects LANs within a university or corp campus.",
        "MAN (Metropolitan): City-wide connectivity via Fiber/Microwave.",
        "WAN (Wide): Global range (Internet, Satellite links)."
      ],
      questions: [
        { 
          text: "Distinguish between a LAN and a WAN. [3 marks]", 
          hint: "Think about geographical range, ownership, and common connection media.",
          answer: "LAN covers a small area like a room/building and is privately owned. WAN covers large regions (countries) and typically uses third-party infrastructure like satellites or leased lines."
        }
      ],
      keywords: [
        { term: "PAN", definition: "Shortest range network for personal devices." },
        { term: "WLAN", definition: "Wireless version of a Local Area Network." },
        { term: "Satellite", definition: "Medium used for global WAN connections." }
      ]
    },
    {
      id: "6",
      title: "Protocols and Data Packets",
      description: "The fundamental definitions and anatomy of data in motion.",
      keyPoints: [
        "Protocol: A set of rules defining format, order, and response actions.",
        "Data Packet: The unit of data routed on a network.",
        "Structure: Header (Source/Target IP, Protocol Type) + Payload (The Data)."
      ],
      questions: [
        { 
          text: "Identify two items contained in a data packet header. [2 marks]", 
          hint: "The header is like the envelope of a letter.",
          answer: "Source IP address and Target/Destination IP address."
        }
      ],
      keywords: [
        { term: "Payload", definition: "The actual data being transmitted in a packet." },
        { term: "Protocol", definition: "Set of rules for communication." }
      ]
    },
    {
      id: "7",
      title: "Necessity of Protocols",
      description: "Why data communication fails without standardized rules.",
      keyPoints: [
        "Data Integrity: Ensuring data isn't lost or corrupted.",
        "Flow Control: Prevents faster senders from overwhelming slow receivers.",
        "Deadlock Prevention: Rules to stop nodes from blocking each other indefinitely.",
        "Error Checking: Using parity bits to identify noise/corruption."
      ],
      questions: [
        { 
          text: "Explain how protocols manage flow control. [3 marks]", 
          hint: "Think about how a bucket overflows if poured too fast.",
          answer: "Flow control uses feedback mechanisms to tell the sender to slow down if the receiver's buffer is full, ensuring data is not lost."
        }
      ],
      keywords: [
        { term: "Deadlock", definition: "When two nodes wait for each other, stopping all flow." },
        { term: "Congestion", definition: "State where network load exceeds capacity." }
      ]
    },
    {
      id: "11",
      title: "Packet Switching",
      description: "Routing small units of data independently through a mesh network.",
      keyPoints: [
        "Dynamic Routing: Packets can take different paths to reach one target.",
        "Reassembly: Packets contain sequence numbers to be rebuilt at destination.",
        "Efficiency: High bandwidth utilization as many users share the same lines."
      ],
      questions: [
        { 
          text: "Outline why packets might arrive at the destination in a different order than sent. [2 marks]", 
          hint: "Traffic jams on specific network nodes.",
          answer: "Packet switching routes each packet independently; some may take faster routes or be delayed by congestion, arriving out of sequence."
        }
      ],
      keywords: [
        { term: "Router", definition: "Node that forwards packets based on IP." },
        { term: "Hop", definition: "Each individual leg of a packet's journey." }
      ]
    }
  ];

  const sidebarResources = [
    { title: "Official IB CS Guide", url: "#", type: "Official", icon: <Globe className="w-4 h-4" /> },
    { title: "Topic 3: Wiki Summary", url: "#", type: "Tutorial", icon: <Info className="w-4 h-4" /> },
    { title: "Mr Bulmer 3.1.1: Types", url: "#", type: "Video", icon: <Video className="w-4 h-4" /> },
    { title: "Mr Bulmer 3.1.3: Layers", url: "#", type: "Video", icon: <Video className="w-4 h-4" /> },
    { title: "Mr Bulmer 3.1.6: VPN", url: "#", type: "Video", icon: <Video className="w-4 h-4" /> },
    { title: "Mr Bulmer 3.1.11: Switching", url: "#", type: "Video", icon: <Video className="w-4 h-4" /> },
    { title: "Mr Bulmer 3.1.13: Hardware", url: "#", type: "Video", icon: <Video className="w-4 h-4" /> },
    { title: "GeeksForGeeks: Network Basics", url: "#", type: "Tutorial", icon: <LinkIcon className="w-4 h-4" /> },
    { title: "Quizlet: Key Terms", url: "#", type: "Practice", icon: <ListChecks className="w-4 h-4" /> },
    { title: "Past Papers Repository", url: "#", type: "Official", icon: <FileText className="w-4 h-4" /> }
  ];

  const hlVsSlTable = [
    { 
      topic: "VPN Usage", 
      sl: "Explain how a VPN provides secure access.", 
      hl: "Evaluate the impact of VPN encryption on overall network speed and performance.",
      hint: "Encryption adds bits = overhead."
    },
    { 
      topic: "Media Characteristics", 
      sl: "State one advantage of Fiber optic cables.", 
      hl: "Contrast Fiber optic and Radio wave transmission regarding security and reliability in a corporate setting.",
      hint: "Fiber cannot be 'sniffed' wirelessly."
    },
    { 
      topic: "Layering Models", 
      sl: "Identify the four layers of the TCP/IP model.", 
      hl: "Compare the OSI model and TCP/IP model, focusing on how the Application layer differs in abstraction.",
      hint: "OSI is 7 layers; TCP/IP is 4."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex">
      
      {/* SIDEBAR (RESOURCES) */}
      <aside className="hidden lg:flex w-80 bg-white border-r border-gray-200 flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <LinkIcon className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-xs">Knowledge Base</span>
          </div>
          <h2 className="text-xl font-extrabold text-gray-900">Resources</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {sidebarResources.map((res, i) => (
            <div key={i} className="group relative">
              <a 
                href={res.url} 
                className="flex items-center gap-3 p-4 rounded-2xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all"
              >
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-white text-gray-500 group-hover:text-blue-600">
                  {res.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-none">{res.title}</p>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">{res.type}</span>
                </div>
              </a>
              {res.type === 'Video' && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => alert("Redirecting to transcript...")} title="Transcript">
                    <FileText className="w-4 h-4 text-blue-400 hover:text-blue-600" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="p-6 bg-gray-50 rounded-t-3xl border-t border-gray-200">
          <p className="text-[10px] text-gray-400 text-center font-medium leading-relaxed">
            Content adapted from IB Computer Science 2014 & Mr. Bulmer's Learning Zone
          </p>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                <Network className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Topic 3: Networks</h1>
                <p className="text-gray-500 font-medium">Standard & Higher Level Core Module</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-white rounded-3xl border border-gray-200 shadow-sm flex items-center gap-4">
                <Clock className="w-6 h-6 text-orange-500" />
                <div><p className="text-xs text-gray-400 font-bold uppercase">Revision Time</p><p className="font-bold text-gray-900">4-6 Hours</p></div>
              </div>
              <div className="p-5 bg-white rounded-3xl border border-gray-200 shadow-sm flex items-center gap-4">
                <Cpu className="w-6 h-6 text-blue-500" />
                <div><p className="text-xs text-gray-400 font-bold uppercase">Difficulty</p><p className="font-bold text-gray-900">Moderate</p></div>
              </div>
              <div className="p-5 bg-white rounded-3xl border border-gray-200 shadow-sm flex items-center gap-4">
                <MapPin className="w-6 h-6 text-green-500" />
                <div><p className="text-xs text-gray-400 font-bold uppercase">Exam Focus</p><p className="font-bold text-gray-900">Protocols/VPN</p></div>
              </div>
            </div>
          </div>

          {/* Curriculum Path */}
          <div className="mb-20">
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-500" /> Interactive Curriculum Breakdown
            </h3>
            <div className="space-y-4">
              {curriculumData.map((ex, idx) => (
                <ExerciseCard key={idx} ex={ex} idx={idx} />
              ))}
            </div>
          </div>

          {/* SL vs HL Table */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-200 shadow-xl shadow-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <ListChecks className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">SL vs. HL Assessment Table</h3>
                <p className="text-gray-500 text-sm">Identifying the depth required for Paper 1</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="pb-4 pr-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest">Core Topic</th>
                    <th className="pb-4 px-4 font-bold text-blue-600 uppercase text-[10px] tracking-widest bg-blue-50/50 rounded-t-2xl">Standard Level (SL)</th>
                    <th className="pb-4 px-4 font-bold text-purple-600 uppercase text-[10px] tracking-widest bg-purple-50/50 rounded-t-2xl">Higher Level (HL)</th>
                    <th className="pb-4 pl-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest">Self Check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {hlVsSlTable.map((row, i) => (
                    <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                      <td className="py-6 pr-4 font-bold text-gray-900 text-sm w-32">{row.topic}</td>
                      <td className="py-6 px-4 text-sm text-gray-600 leading-relaxed bg-blue-50/20">{row.sl}</td>
                      <td className="py-6 px-4 text-sm text-gray-800 font-medium leading-relaxed bg-purple-50/20">{row.hl}</td>
                      <td className="py-6 pl-4">
                        <button 
                          onClick={() => alert(`Exam Tip: ${row.hint}`)}
                          className="flex items-center gap-1 text-[10px] font-bold text-blue-500 hover:text-blue-700 transition-colors"
                        >
                          HINT <ChevronRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-16 text-center text-xs text-gray-400 border-t border-gray-100 pt-8">
            <p>Designed for IB DP Computer Science Students | Topic 3: Networks Fundamentals</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopicThreeNetworks;