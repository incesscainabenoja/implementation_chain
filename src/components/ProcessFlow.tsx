import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Upload, 
  Database, 
  Lock, 
  Eye, 
  FileText, 
  Link2, 
  CheckCircle2, 
  MapPin, 
  Clock,
  Shield,
  AlertCircle,
  ArrowDown
} from 'lucide-react';

interface ProcessFlowProps {
  activeStage: number | null;
  setActiveStage: (stage: number | null) => void;
}

const stages = [
  {
    number: 1,
    title: 'Document Upload & Proof Generation',
    subtitle: 'Web2 + Blockchain Interface',
    icon: Upload,
    color: 'blue',
    steps: [
      {
        title: 'Upload Documents',
        description: 'Inspection reports, payrolls, vouchers, liquidation reports, completion certificates, and BOQ vs. actual measurement reports uploaded to government portal',
        icon: FileText
      },
      {
        title: 'Generate Blockchain Proof',
        description: 'Blockchain Proof Generator creates digital signature and transaction hash for each file',
        icon: Shield
      },
      {
        title: 'Decentralized Storage',
        description: 'Files stored in IPFS or Xode Cloud with immutable URL Locator',
        icon: Database
      },
      {
        title: 'Record Transaction',
        description: 'Transaction hash (Tx Hash) and timestamp recorded in Blockchain Smart Contract',
        icon: Link2
      }
    ]
  },
  {
    number: 2,
    title: 'Smart Contract-Based Disbursement Control',
    subtitle: 'Automated Payment Triggers',
    icon: Lock,
    color: 'green',
    steps: [
      {
        title: 'Payment Locks',
        description: 'Payment releases locked by smart contracts requiring verified completion milestones',
        icon: Lock
      },
      {
        title: 'Geotag Verification',
        description: 'Upload of geotagged photos and GPS timestamps verified by PMC',
        icon: MapPin
      },
      {
        title: 'Independent Acceptance',
        description: 'Third-party inspectors (e.g., CPDO) provide independent acceptance',
        icon: CheckCircle2
      },
      {
        title: 'Fund Disbursement',
        description: 'Once conditions met, City Treasurer\'s wallet initiates on-chain disbursement transaction',
        icon: CheckCircle2
      }
    ]
  },
  {
    number: 3,
    title: 'Transparency & Public Access',
    subtitle: 'Open Verification System',
    icon: Eye,
    color: 'purple',
    steps: [
      {
        title: 'Transaction Traceability',
        description: 'Every transaction (inspection, approval, payment) traceable via public project monitoring portal',
        icon: Eye
      },
      {
        title: 'External Node Access',
        description: 'COA, civic audit teams, watchdogs, and budget monitoring groups can access data permissionlessly',
        icon: Database
      },
      {
        title: 'Data Privacy',
        description: 'Watchdogs verify transactions but cannot alter or identify internal users, preventing collusion',
        icon: Shield
      },
      {
        title: 'Real-Time Verification',
        description: 'Stakeholders can verify authenticity in real time through blockchain nodes',
        icon: Clock
      }
    ]
  },
  {
    number: 4,
    title: 'Audit & Accountability Layer',
    subtitle: 'Immutable Audit Trails',
    icon: Shield,
    color: 'orange',
    steps: [
      {
        title: 'Independent Verification',
        description: 'Internal Audit Office connects to blockchain nodes for independent payment milestone verification',
        icon: CheckCircle2
      },
      {
        title: 'Immutable Audit Trails',
        description: 'Hashes, timestamps, and inspector signatures are immutable and comparable with physical inspections',
        icon: Link2
      },
      {
        title: 'Performance Tracking',
        description: 'Late or non-performance records linked to smart contract penalty triggers',
        icon: AlertCircle
      },
      {
        title: 'Automatic Penalties',
        description: 'Performance bond forfeitures enforced automatically by smart contracts',
        icon: AlertCircle
      }
    ]
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-300',
    header: 'bg-gradient-to-r from-blue-500 to-blue-600',
    icon: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-300',
    header: 'bg-gradient-to-r from-green-500 to-green-600',
    icon: 'text-green-600',
    badge: 'bg-green-100 text-green-700'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-300',
    header: 'bg-gradient-to-r from-purple-500 to-purple-600',
    icon: 'text-purple-600',
    badge: 'bg-purple-100 text-purple-700'
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-300',
    header: 'bg-gradient-to-r from-orange-500 to-orange-600',
    icon: 'text-orange-600',
    badge: 'bg-orange-100 text-orange-700'
  }
};

export function ProcessFlow({ activeStage, setActiveStage }: ProcessFlowProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white shadow-lg border-indigo-100">
        <h2 className="text-indigo-900 mb-2">Blockchain Integration Process Flow</h2>
        <p className="text-gray-600">
          Four critical stages that ensure transparent, secure, and accountable project implementation
        </p>
      </Card>

      <div className="space-y-8">
        {stages.map((stage, stageIndex) => {
          const Icon = stage.icon;
          const colors = colorClasses[stage.color as keyof typeof colorClasses];
          const isActive = activeStage === stageIndex;
          
          return (
            <div key={stageIndex} className="relative">
              <Card 
                className={`overflow-hidden border-2 ${colors.border} ${isActive ? 'shadow-xl ring-2 ring-offset-2 ring-indigo-400' : 'shadow-lg'} transition-all cursor-pointer`}
                onClick={() => setActiveStage(isActive ? null : stageIndex)}
              >
                {/* Header */}
                <div className={`${colors.header} text-white p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <Badge className="bg-white/20 text-white border-white/30">
                          Stage {stage.number}
                        </Badge>
                        <h3 className="text-white">{stage.title}</h3>
                      </div>
                      <p className="text-white/90 text-sm">{stage.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Steps */}
                <div className={`p-6 ${colors.bg}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    {stage.steps.map((step, stepIndex) => {
                      const StepIcon = step.icon;
                      return (
                        <div 
                          key={stepIndex}
                          className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 ${colors.bg} rounded-lg`}>
                              <StepIcon className={`w-5 h-5 ${colors.icon}`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-gray-900 mb-1">{step.title}</h4>
                              <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>

              {/* Arrow connector */}
              {stageIndex < stages.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowDown className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Flow Summary */}
      <Card className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
          <div>
            <h3 className="text-white mb-2">Complete Trustless Ecosystem</h3>
            <p className="text-white/90">
              This integrated blockchain system creates a trustless monitoring ecosystem that reduces corruption risk, 
              enforces accountability, and ensures that every peso spent yields visible, verifiable results.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
