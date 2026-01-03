export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-4">
          MoveItMoveIt.ai
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Your AI-powered moving assistant
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">🗺️ Atlas Agent</h2>
            <p className="text-gray-600">
              Destination research and city intelligence
            </p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">👥 Connector Agent</h2>
            <p className="text-gray-600">
              Community matching and social integration
            </p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">🏥 Medic Agent</h2>
            <p className="text-gray-600">
              Health services and NDIS support
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Coming soon: Full onboarding and AI agent chat
          </p>
        </div>
      </div>
    </main>
  );
}
