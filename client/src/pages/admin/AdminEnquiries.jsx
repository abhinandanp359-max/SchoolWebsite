import { useState, useEffect } from "react";
import { X } from "lucide-react";
import api from "../../utils/api";

const TABS = [
  { key: "admissions", label: "Admissions", endpoint: "/admissions" },
  { key: "contact", label: "Contact", endpoint: "/contact" },
];

const STATUS_STYLES = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-amber-100 text-amber-700",
  resolved: "bg-green-100 text-green-700",
};

export default function AdminEnquiries() {
  const [activeTab, setActiveTab] = useState("admissions");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const tab = TABS.find((t) => t.key === activeTab);
      const res = await api.get(tab.endpoint);
      setData(res.data);
    } catch (err) {
      console.error("Failed to fetch enquiries", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const updateStatus = async (id, status) => {
    const tab = TABS.find((t) => t.key === activeTab);
    try {
      await api.put(`${tab.endpoint}/${id}`, { status });
      setData((prev) => prev.map((item) => (item._id === id ? { ...item, status } : item)));
      if (selected?._id === id) {
        setSelected((prev) => ({ ...prev, status }));
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Enquiries</h1>

      <div className="flex gap-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition cursor-pointer ${
              activeTab === tab.key
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-4 animate-pulse">
              <div className="h-4 bg-slate-200 rounded w-1/3 mb-2" />
              <div className="h-3 bg-slate-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : data.length === 0 ? (
        <p className="text-slate-500 text-center py-12">No enquiries found.</p>
      ) : (
        <div className="space-y-3">
          {data.map((item) => (
            <button
              key={item._id}
              onClick={() => setSelected(item)}
              className="w-full bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 hover:shadow-md transition-shadow text-left cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-800 truncate">
                  {item.name || item.studentName || "Untitled"}
                </h3>
                <p className="text-sm text-slate-500 truncate">
                  {item.email || item.phone || ""}
                </p>
              </div>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 capitalize ${
                  STATUS_STYLES[item.status] || STATUS_STYLES.new
                }`}
              >
                {item.status || "new"}
              </span>
            </button>
          ))}
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-semibold text-slate-800 mb-4">Enquiry Details</h2>

            <div className="space-y-3 mb-6">
              {Object.entries(selected).map(([key, value]) => {
                if (key === "_id" || key === "__v" || key === "createdAt" || key === "updatedAt") return null;
                if (typeof value === "boolean") {
                  value = value ? "Yes" : "No";
                }
                if (typeof value === "string" && key.includes("date")) {
                  value = new Date(value).toLocaleDateString("en-IN");
                }
                return (
                  <div key={key}>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                    <p className="text-sm text-slate-800">{value || "—"}</p>
                  </div>
                );
              })}
            </div>

            <div className="border-t pt-4">
              <p className="text-sm font-medium text-slate-700 mb-3">Update Status</p>
              <div className="flex gap-2">
                {["new", "contacted", "resolved"].map((status) => (
                  <button
                    key={status}
                    onClick={() => updateStatus(selected._id, status)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition capitalize cursor-pointer ${
                      selected.status === status
                        ? STATUS_STYLES[status]
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
