// Sample page from the Night Shift Nurse Survival Bundle
export default function SamplePage() {
  return (
    <div className="min-h-screen bg-white p-8 font-mono text-sm max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-blue-600 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-800">NIGHT SHIFT NURSE</h1>
            <h2 className="text-lg text-blue-600">SURVIVAL BUNDLE</h2>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-600">SAMPLE PAGE</div>
            <div className="text-xs text-gray-600">2026 EDITION</div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-blue-800 mb-2">HOURLY MEDICATION & TASK TIMELINE</h3>
        <p className="text-sm text-gray-700">1900 - 0700 Night Shift • 12 Hours</p>
        <p className="text-xs text-gray-500 mt-2">Sample page from your downloadable bundle</p>
      </div>

      {/* Timeline Grid */}
      <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
        <div className="bg-blue-50 p-3 border-b border-gray-300">
          <div className="grid grid-cols-12 gap-2 text-xs font-bold text-blue-800">
            <div>TIME</div>
            <div>MEDS</div>
            <div>VITALS</div>
            <div>CHART</div>
            <div>ASSESS</div>
            <div>TIME</div>
            <div>MEDS</div>
            <div>VITALS</div>
            <div>CHART</div>
            <div>ASSESS</div>
            <div>TIME</div>
            <div>NOTES</div>
          </div>
        </div>

        {/* Sample rows */}
        <div className="p-3 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-2 text-xs">
            <div className="font-bold">1900</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div className="font-bold">2000</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div className="font-bold">2100</div>
            <div className="col-span-2 text-xs">Report from day shift</div>
          </div>
        </div>

        <div className="p-3 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-2 text-xs">
            <div className="font-bold">1930</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div className="font-bold">2030</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div className="font-bold">2130</div>
            <div className="col-span-2 text-xs">Check IV fluids</div>
          </div>
        </div>

        <div className="p-3 border-b border-gray-200 bg-yellow-50">
          <div className="grid grid-cols-12 gap-2 text-xs">
            <div className="font-bold text-orange-600">0200</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div className="font-bold text-orange-600">0300</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div className="font-bold text-orange-600">0400</div>
            <div className="col-span-2 text-xs text-orange-600">⚠️ NIGHT SHIFT DIP - Stay Alert!</div>
          </div>
        </div>

        {/* More sample rows */}
        <div className="p-3 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-2 text-xs">
            <div className="font-bold">0500</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div className="font-bold">0600</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div>□</div>
            <div className="font-bold">0700</div>
            <div className="col-span-2 text-xs">End of shift handoff</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-600 border-t border-gray-300 pt-4">
        <p className="mb-2">💡 <strong>Pro Tip:</strong> Use checkboxes to track completion. Highlight critical times.</p>
        <p>🌙 <strong>Night Shift Focus:</strong> 0200-0400 is the "dip" - double-check everything!</p>
        <p className="mt-4 text-xs text-blue-600 font-semibold">This is a sample page. Download the full bundle for all 8 pages!</p>
      </div>
    </div>
  );
}
