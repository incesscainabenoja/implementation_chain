import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Building2, 
  UserCheck, 
  DollarSign, 
  Wallet, 
  Search, 
  Users, 
  Globe 
} from 'lucide-react';

const actors = [
  {
    icon: Building2,
    title: 'Implementing Department',
    role: 'Project Oversight',
    description: 'Oversees project implementation and initiates payment processes.',
    color: 'blue',
    responsibilities: [
      'Manage project execution',
      'Initiate payment requests',
      'Upload project documentation'
    ]
  },
  {
    icon: UserCheck,
    title: 'Project Engineer / Supervisor',
    role: 'Quality Control',
    description: 'Prepares inspection and acceptance reports.',
    color: 'green',
    responsibilities: [
      'Conduct site inspections',
      'Prepare acceptance reports',
      'Verify work completion'
    ]
  },
  {
    icon: DollarSign,
    title: 'City Accountant',
    role: 'Financial Verification',
    description: 'Verifies vouchers and supporting documents.',
    color: 'purple',
    responsibilities: [
      'Verify financial documents',
      'Check voucher accuracy',
      'Validate budget allocation'
    ]
  },
  {
    icon: Wallet,
    title: 'City Treasurer',
    role: 'Fund Disbursement',
    description: 'Disburses approved payments.',
    color: 'orange',
    responsibilities: [
      'Release approved funds',
      'Execute blockchain transactions',
      'Maintain payment records'
    ]
  },
  {
    icon: Search,
    title: 'Internal Audit Office',
    role: 'Compliance & Verification',
    description: 'Conducts spot checks and compliance verification.',
    color: 'red',
    responsibilities: [
      'Perform spot audits',
      'Verify blockchain records',
      'Ensure compliance'
    ]
  },
  {
    icon: Users,
    title: 'Project Monitoring Committee (PMC)',
    role: 'Milestone Validation',
    description: 'Validates project milestones and geotag evidence.',
    color: 'indigo',
    responsibilities: [
      'Validate milestones',
      'Verify geotagged photos',
      'Approve progress claims'
    ]
  },
  {
    icon: Globe,
    title: 'Beneficiaries / Public',
    role: 'Transparency & Oversight',
    description: 'Can verify project progress via a public blockchain portal.',
    color: 'teal',
    responsibilities: [
      'Monitor project progress',
      'Access public records',
      'Provide citizen feedback'
    ]
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: 'text-green-600',
    badge: 'bg-green-100 text-green-700'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    icon: 'text-purple-600',
    badge: 'bg-purple-100 text-purple-700'
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    icon: 'text-orange-600',
    badge: 'bg-orange-100 text-orange-700'
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: 'text-red-600',
    badge: 'bg-red-100 text-red-700'
  },
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    icon: 'text-indigo-600',
    badge: 'bg-indigo-100 text-indigo-700'
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    icon: 'text-teal-600',
    badge: 'bg-teal-100 text-teal-700'
  }
};

export function ActorsSection() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white shadow-lg border-indigo-100">
        <h2 className="text-indigo-900 mb-2">Key Actors in the System</h2>
        <p className="text-gray-600">
          Seven critical stakeholders working together to ensure transparent and accountable project implementation
        </p>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actors.map((actor, index) => {
          const Icon = actor.icon;
          const colors = colorClasses[actor.color as keyof typeof colorClasses];
          
          return (
            <Card 
              key={index} 
              className={`p-6 ${colors.bg} border-2 ${colors.border} hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 bg-white rounded-lg shadow-sm`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{actor.title}</h3>
                  <Badge className={colors.badge}>{actor.role}</Badge>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                {actor.description}
              </p>
              
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Key Responsibilities:</div>
                <ul className="space-y-1">
                  {actor.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
