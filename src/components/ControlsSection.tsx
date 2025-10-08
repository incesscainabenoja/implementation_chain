import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Shield, 
  MapPin, 
  Lock, 
  Eye, 
  Settings,
  CheckCircle2
} from 'lucide-react';

const controls = [
  {
    icon: Shield,
    title: 'Immutable Recordkeeping',
    description: 'Every report, voucher, and certificate is permanently recorded on the blockchain ledger.',
    benefits: [
      'Cannot be altered or deleted',
      'Complete audit trail',
      'Cryptographically secured',
      'Timestamped entries'
    ],
    color: 'blue',
    emoji: '✅'
  },
  {
    icon: MapPin,
    title: 'Geotag + Timestamp Proof',
    description: 'Photos with embedded GPS and timestamps are verified via blockchain hash proofs.',
    benefits: [
      'Location verification',
      'Time-stamped evidence',
      'Photo authenticity guaranteed',
      'Real-time tracking'
    ],
    color: 'green',
    emoji: '📍'
  },
  {
    icon: Lock,
    title: 'Conditional Smart Contract Payments',
    description: 'Funds are only released when blockchain-logged milestones are met.',
    benefits: [
      'Automated fund release',
      'Milestone-based payments',
      'No manual intervention needed',
      'Rules-based execution'
    ],
    color: 'purple',
    emoji: '🔐'
  },
  {
    icon: Eye,
    title: 'Transparent Public Portal',
    description: 'Citizens and watchdogs can track project status and fund flow in real time.',
    benefits: [
      'Public access to records',
      'Real-time monitoring',
      'Civic participation enabled',
      'Increased accountability'
    ],
    color: 'orange',
    emoji: '🔎'
  },
  {
    icon: Settings,
    title: 'Automatic Penalty Execution',
    description: 'Smart contracts enforce penalties for delays or falsified accomplishments.',
    benefits: [
      'Automated enforcement',
      'Performance bond forfeitures',
      'Delay penalties',
      'No dispute on violations'
    ],
    color: 'red',
    emoji: '⚙️'
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-600',
    iconBg: 'bg-blue-100'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: 'text-green-600',
    iconBg: 'bg-green-100'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    icon: 'text-purple-600',
    iconBg: 'bg-purple-100'
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    icon: 'text-orange-600',
    iconBg: 'bg-orange-100'
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: 'text-red-600',
    iconBg: 'bg-red-100'
  }
};

export function ControlsSection() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white shadow-lg border-indigo-100">
        <h2 className="text-indigo-900 mb-2">Controls to Plug Loopholes</h2>
        <p className="text-gray-600">
          On-chain mechanisms that ensure accountability, prevent fraud, and enforce compliance throughout the project lifecycle
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {controls.map((control, index) => {
          const Icon = control.icon;
          const colors = colorClasses[control.color as keyof typeof colorClasses];
          
          return (
            <Card 
              key={index} 
              className={`p-6 ${colors.bg} border-2 ${colors.border} hover:shadow-xl transition-all`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 text-2xl bg-white rounded-lg shadow-sm">
                  {control.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-2">{control.title}</h3>
                  <p className="text-gray-700">{control.description}</p>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 ${colors.iconBg} rounded`}>
                    <Icon className={`w-4 h-4 ${colors.icon}`} />
                  </div>
                  <span className="text-sm text-gray-600">Key Benefits:</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {control.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className={`w-4 h-4 ${colors.icon} mt-0.5 flex-shrink-0`} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Why This Matters Section */}
      <Card className="p-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl">
        <div className="mb-4">
          <h3 className="text-white mb-2">Why This Matters</h3>
          <p className="text-white/90 mb-4">
            By integrating blockchain technology, the Implementation, Payment, and Project Monitoring phase gains unprecedented levels of trust and efficiency:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5" />
              <h4 className="text-white">Tamper-proof Documentation</h4>
            </div>
            <p className="text-sm text-white/80">
              All records are cryptographically secured and cannot be altered retroactively
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5" />
              <h4 className="text-white">Automated Fund Release</h4>
            </div>
            <p className="text-sm text-white/80">
              Smart contracts ensure funds are only released when conditions are verified
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-5 h-5" />
              <h4 className="text-white">Public Transparency</h4>
            </div>
            <p className="text-sm text-white/80">
              Citizens can monitor projects in real-time, ensuring civic participation
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5" />
              <h4 className="text-white">Faster Audits</h4>
            </div>
            <p className="text-sm text-white/80">
              Immutable records enable quick verification and reduce audit time significantly
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <p className="text-center text-white">
            <strong>Result:</strong> A trustless monitoring ecosystem that reduces corruption risk, enforces accountability, 
            and ensures every peso spent yields visible results.
          </p>
        </div>
      </Card>
    </div>
  );
}
