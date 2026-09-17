import Sidebar from './components/Sidebar'
import Header from './components/Header'
import WelcomeBanner from './components/WelcomeBanner'
import KPICards from './components/KPICards'
import ProductionPipeline from './components/ProductionPipeline'
import RevenueChart from './components/RevenueChart'
import ServiceDonut from './components/ServiceDonut'
import UrgentOrdersTable from './components/UrgentOrdersTable'
import MachineGrid from './components/MachineGrid'

function App() {
  return (
    <div className="bg-background font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <Sidebar />
      <div className="pl-72">
        <Header />
        <main className="w-full pt-16 bg-background px-8 min-h-screen">
          <div className="flex flex-col w-full pb-16 space-y-8">
            <WelcomeBanner />
            <KPICards />
            <ProductionPipeline />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <RevenueChart />
              <ServiceDonut />
            </div>
            <UrgentOrdersTable />
            <MachineGrid />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
