import { useState } from 'react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { 
  FileText, 
  Lock, 
  Eye, 
  Shield, 
  Upload, 
  Database, 
  CheckCircle2, 
  Users, 
  Wallet, 
  MapPin, 
  Clock,
  AlertCircle,
  Link2,
  FileCheck,
  Building2,
  UserCheck,
  DollarSign,
  Search,
  Globe
} from 'lucide-react';
import { ProcessFlow } from './ProcessFlow';
import { ActorsSection } from './ActorsSection';
import { ControlsSection } from './ControlsSection';

export function BlockchainDiagram() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full mb-4">
          <Database className="w-5 h-5" />
          <span>Blockchain Integration</span>
        </div>
        <h1 className="mb-3 text-indigo-900">
          Implementation, Payment & Project Monitoring Phase
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Ensuring transparency, accountability, and proper use of project funds through blockchain-backed documentation and monitoring
        </p>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="actors">Key Actors</TabsTrigger>
          <TabsTrigger value="process">Process Flow</TabsTrigger>
          <TabsTrigger value="controls">Controls</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card className="p-6 bg-white shadow-lg border-indigo-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-indigo-900 mb-2">Main Goal</h3>
                <p className="text-gray-700">
                  To ensure transparency, accountability, and proper use of project funds during the implementation 
                  and payment stages through blockchain-backed documentation and monitoring.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <h4 className="text-green-900">Key Benefits</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Tamper-proof documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Automated, rules-based fund release</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Public transparency & civic participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Faster, verifiable audits</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-5 h-5 text-blue-600" />
                  <h4 className="text-blue-900">Blockchain Features</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Link2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Immutable transaction records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Link2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Smart contract automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Link2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Decentralized storage (IPFS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Link2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Real-time public verification</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 bg-white shadow-md border-indigo-100">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-indigo-600" />
                <div>
                  <div className="text-2xl text-indigo-900">7</div>
                  <div className="text-sm text-gray-600">Key Actors</div>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-white shadow-md border-green-100">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-green-600" />
                <div>
                  <div className="text-2xl text-green-900">4</div>
                  <div className="text-sm text-gray-600">Process Stages</div>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-white shadow-md border-purple-100">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="text-2xl text-purple-900">5</div>
                  <div className="text-sm text-gray-600">Control Mechanisms</div>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-white shadow-md border-orange-100">
              <div className="flex items-center gap-3">
                <Eye className="w-8 h-8 text-orange-600" />
                <div>
                  <div className="text-2xl text-orange-900">100%</div>
                  <div className="text-sm text-gray-600">Transparency</div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Actors Tab */}
        <TabsContent value="actors">
          <ActorsSection />
        </TabsContent>

        {/* Process Flow Tab */}
        <TabsContent value="process">
          <ProcessFlow activeStage={activeStage} setActiveStage={setActiveStage} />
        </TabsContent>

        {/* Controls Tab */}
        <TabsContent value="controls">
          <ControlsSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
