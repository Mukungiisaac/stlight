import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/st light pocket.png';
import { 
  FaPlus, FaTrash, FaSignOutAlt, FaImage, FaBox, 
  FaCog, FaSave, FaPhoneAlt, FaEnvelope, 
  FaShieldAlt, FaTags, FaEdit, FaBars, FaTimes 
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [settings, setSettings] = useState({
    phoneNumber: '+254 719 103 288',
    email: 'info@stlight.com',
    address: 'Nairobi, Kenya',
    whatsappMessage: "I'm interested in this product from your catalogue",
    primaryColor: '#0066FF',
    secondaryColor: '#00D084',
    accentColor: '#FF8C00'
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const navigate = useNavigate();

  const [adminData, setAdminData] = useState({ email: 'admin@stlight.com' });
  const [pwdData, setPwdData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });

  const [formData, setFormData] = useState({
    name: '', description: '', price: '', category: '', image: ''
  });

  const [newCat, setNewCat] = useState({ name: '', description: '' });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [prodRes, catRes, setRes] = await Promise.all([
        axios.get('http://localhost:5000/api/products'),
        axios.get('http://localhost:5000/api/categories'),
        axios.get('http://localhost:5000/api/settings')
      ]);
      setProducts(prodRes.data.data);
      setCategories(catRes.data.data);
      if (setRes.data.data) {
        setSettings(setRes.data.data);
        document.documentElement.style.setProperty('--primary-color', setRes.data.data.primaryColor);
        document.documentElement.style.setProperty('--secondary-color', setRes.data.data.secondaryColor);
        document.documentElement.style.setProperty('--accent-color', setRes.data.data.accentColor);
      }
      if (catRes.data.data.length > 0 && !formData.category) {
        setFormData(prev => ({ ...prev, category: catRes.data.data[0].name }));
      }
    } catch (err) {
      setError('System Offline: Database connection issue.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleUpdateSettings = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:5000/api/settings', settings, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      document.documentElement.style.setProperty('--primary-color', settings.primaryColor);
      document.documentElement.style.setProperty('--secondary-color', settings.secondaryColor);
      document.documentElement.style.setProperty('--accent-color', settings.accentColor);
      alert('Settings Updated!');
    } catch (err) { alert('Update failed'); }
  };

  const handleUpdateAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:5000/api/auth/updatedetails', adminData, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      alert('Email updated!');
    } catch (err) { alert('Update failed'); }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (pwdData.newPassword !== pwdData.confirmPassword) return alert('Passwords mismatch');
    try {
      await axios.put('http://localhost:5000/api/auth/updatepassword', pwdData, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      setPwdData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      alert('Password updated!');
    } catch (err) { alert('Update failed'); }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/categories', newCat, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      setNewCat({ name: '', description: '' });
      fetchData();
    } catch (err) { alert('Failed'); }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm('Delete category?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/categories/${id}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      fetchData();
    } catch (err) { alert('Failed'); }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append('image', file);
    setUploading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const relativePath = res.data.data.path.startsWith('/') ? res.data.data.path.substring(1) : res.data.data.path;
      setFormData({ ...formData, image: relativePath });
    } catch (err) { 
      console.error(err);
      alert('Upload failed: ' + (err.response?.data?.message || 'Server connection error. Ensure the backend is running.')); 
    } finally { setUploading(false); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', { ...formData, images: [formData.image] }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      setShowAddForm(false);
      setFormData({ name: '', description: '', price: '', image: '', category: categories[0]?.name || '' });
      fetchData();
    } catch (err) { alert('Failed'); }
  };

  const handleEditClick = (p) => {
    setEditingProduct(p);
    setFormData({ name: p.name, description: p.description, price: p.price, category: p.category, image: p.images[0] || '' });
    setShowEditForm(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${editingProduct._id}`, { ...formData, images: [formData.image] }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      setShowEditForm(false);
      fetchData();
    } catch (err) { alert('Update failed'); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete product?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      fetchData();
    } catch (err) { alert('Failed'); }
  };

  if (loading) return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center space-y-3">
        <div className="w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px]">Loading Admin Space...</p>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden text-sm">
      {/* Collapsible Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-brand-black transition-all duration-300 flex flex-col relative z-50`}>
        <div className="p-6 flex items-center justify-between border-b border-white/5">
          {isSidebarOpen && <img src={logo} alt="ST.LIGHT" className="h-7 w-auto brightness-0 invert" />}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-400 hover:text-white transition-colors">
            {isSidebarOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        <nav className="flex-1 mt-6 px-3 space-y-1">
          {[
            { id: 'products', name: 'Products', icon: FaBox },
            { id: 'settings', name: 'Settings', icon: FaCog },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center ${isSidebarOpen ? 'space-x-3 px-4' : 'justify-center'} py-2.5 rounded-lg transition-all ${
                activeTab === item.id 
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20' 
                  : 'text-gray-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={16} />
              {isSidebarOpen && <span className="font-bold">{item.name}</span>}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/5">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center ${isSidebarOpen ? 'space-x-3 px-4' : 'justify-center'} py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-all`}
          >
            <FaSignOutAlt size={16} />
            {isSidebarOpen && <span className="font-bold">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {error && (
          <div className="mb-6 bg-red-50 border border-red-100 p-4 rounded-xl flex items-center justify-between text-xs font-medium">
            <div className="flex items-center space-x-2">
              <FaShieldAlt className="text-red-500" />
              <p className="text-red-600">{error}</p>
            </div>
            <button onClick={fetchData} className="text-red-600 font-bold uppercase hover:underline">Retry</button>
          </div>
        )}
        
        {activeTab === 'products' ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-xl font-black text-brand-black">Catalogue Control</h1>
                <p className="text-gray-400 text-xs font-medium">Manage your digital systems</p>
              </div>
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-brand-blue text-white px-5 py-2.5 rounded-lg font-bold text-xs flex items-center space-x-2 shadow-lg shadow-brand-blue/20 hover:scale-[1.02] transition-all"
              >
                <FaPlus size={12} />
                <span>New Entry</span>
              </button>
            </div>

            {/* Compact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Total Systems', val: products.length, icon: FaBox, color: 'brand-blue' },
                { label: 'Categories', val: categories.length, icon: FaTags, color: 'brand-green' },
                { label: 'Recent', val: '2 New', icon: FaPlus, color: 'brand-orange' },
                { label: 'Health', val: 'Online', icon: FaShieldAlt, color: 'brand-blue' },
              ].map((s, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className={`w-8 h-8 rounded-lg bg-${s.color}/10 text-${s.color} flex items-center justify-center mb-3`}>
                    <s.icon size={14} />
                  </div>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{s.label}</p>
                  <p className="text-lg font-black text-brand-black mt-0.5">{s.val}</p>
                </div>
              ))}
            </div>

            {/* Compact Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100 font-black text-gray-400 uppercase tracking-widest">
                    <th className="px-6 py-4">System Identity</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Price (KSh)</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 font-medium">
                  {products.map((p) => (
                    <tr key={p._id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-100 flex-shrink-0">
                            <img src={`http://localhost:5000/${p.images[0]}`} className="w-full h-full object-cover" />
                          </div>
                          <span className="font-bold text-brand-black">{p.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-0.5 bg-brand-blue/5 text-brand-blue text-[9px] font-bold uppercase rounded border border-brand-blue/10">{p.category}</span>
                      </td>
                      <td className="px-6 py-4 font-bold text-brand-black">{p.price}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end space-x-1.5">
                          <button onClick={() => handleEditClick(p)} className="w-7 h-7 rounded bg-brand-blue/5 text-brand-blue hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all">
                            <FaEdit size={12} />
                          </button>
                          <button onClick={() => handleDelete(p._id)} className="w-7 h-7 rounded bg-red-50 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all">
                            <FaTrash size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <div>
              <h1 className="text-xl font-black text-brand-black">System Preferences</h1>
              <p className="text-gray-400 text-xs font-medium">Manage global business and theme settings</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Settings Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-2 mb-5">
                  <FaPhoneAlt className="text-brand-blue" size={14} />
                  <h3 className="font-black text-brand-black">Business Contact</h3>
                </div>
                <form onSubmit={handleUpdateSettings} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Hotline</label>
                      <input type="text" className="w-full p-2.5 bg-gray-50 border border-gray-100 rounded-lg font-bold focus:ring-2 focus:ring-brand-blue/20 outline-none" value={settings.phoneNumber} onChange={e => setSettings({...settings, phoneNumber: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Email</label>
                      <input type="email" className="w-full p-2.5 bg-gray-50 border border-gray-100 rounded-lg font-bold focus:ring-2 focus:ring-brand-blue/20 outline-none" value={settings.email} onChange={e => setSettings({...settings, email: e.target.value})} />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-brand-blue text-white py-3 rounded-lg font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-md shadow-brand-blue/20">
                    <FaSave size={12} />
                    <span>Save Contact</span>
                  </button>
                </form>
              </div>

              {/* Theme Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-2 mb-5">
                  <FaCog className="text-brand-orange" size={14} />
                  <h3 className="font-black text-brand-black">Theme Customization</h3>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {['primaryColor', 'secondaryColor', 'accentColor'].map(c => (
                    <div key={c}>
                      <label className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">{c.replace('Color','')}</label>
                      <input type="color" className="w-full h-8 rounded cursor-pointer bg-transparent" value={settings[c]} onChange={e => setSettings({...settings, [c]: e.target.value})} />
                    </div>
                  ))}
                </div>
                <button onClick={handleUpdateSettings} className="w-full bg-brand-black text-white py-3 rounded-lg font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2">
                  <FaSave size={12} />
                  <span>Apply Palette</span>
                </button>
              </div>

              {/* Security Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-2 mb-5">
                  <FaEnvelope className="text-red-400" size={14} />
                  <h3 className="font-black text-brand-black">Admin Credentials</h3>
                </div>
                <form onSubmit={handleUpdateAdmin} className="space-y-4">
                  <input type="email" className="w-full p-2.5 bg-gray-50 border border-gray-100 rounded-lg font-bold" value={adminData.email} onChange={e => setAdminData({...adminData, email: e.target.value})} />
                  <button type="submit" className="w-full border-2 border-red-100 text-red-400 py-2.5 rounded-lg font-black text-[10px] uppercase hover:bg-red-50 transition-all">Update Access</button>
                </form>
              </div>

              {/* Category Management Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-2 mb-5">
                  <FaTags className="text-brand-green" size={14} />
                  <h3 className="font-black text-brand-black">Manage Categories</h3>
                </div>
                <form onSubmit={handleAddCategory} className="flex gap-2 mb-4">
                  <input type="text" placeholder="New..." className="flex-1 p-2.5 bg-gray-50 border border-gray-100 rounded-lg font-bold" value={newCat.name} onChange={e => setNewCat({...newCat, name: e.target.value, description: 'Cat'})} />
                  <button type="submit" className="bg-brand-green text-white px-4 rounded-lg font-bold"><FaPlus size={12} /></button>
                </form>
                <div className="flex flex-wrap gap-2">
                  {categories.map(c => (
                    <div key={c._id} className="flex items-center space-x-2 px-2.5 py-1 bg-gray-50 rounded-md border border-gray-100 text-[10px] font-bold text-brand-black group">
                      <span>{c.name}</span>
                      <button onClick={() => handleDeleteCategory(c._id)} className="text-red-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><FaTrash size={10} /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Compact Form Modals */}
        {(showAddForm || showEditForm) && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm" onClick={() => { setShowAddForm(false); setShowEditForm(false); }} />
            <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative z-10 shadow-2xl overflow-y-auto max-h-[90vh]">
              <div className="mb-5">
                <h2 className="text-lg font-black text-brand-black">{showAddForm ? 'Register New System' : 'Edit System Details'}</h2>
              </div>
              <form onSubmit={showAddForm ? handleSubmit : handleEditSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Name</label>
                    <input type="text" className="w-full p-2.5 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div>
                    <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Price (KSh)</label>
                    <input type="text" className="w-full p-2.5 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} required />
                  </div>
                </div>
                <div>
                  <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Category</label>
                  <select className="w-full p-2.5 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                    {categories.map(c => <option key={c._id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Technical Info</label>
                  <textarea className="w-full p-2.5 bg-gray-50 border border-gray-100 rounded-lg text-xs font-medium h-24" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
                </div>
                <div>
                  <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">System Photo</label>
                  <div className="h-32 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center overflow-hidden relative">
                    {formData.image ? <img src={`http://localhost:5000/${formData.image}`} className="w-full h-full object-cover" /> : <FaImage className="text-gray-300 text-2xl" />}
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageUpload} />
                    {uploading && <div className="absolute inset-0 bg-white/80 flex items-center justify-center text-[9px] font-black uppercase text-brand-blue">Processing...</div>}
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <button type="submit" className="flex-1 bg-brand-blue text-white py-3 rounded-lg font-black text-[10px] uppercase tracking-widest">Update Catalogue</button>
                  <button type="button" onClick={() => { setShowAddForm(false); setShowEditForm(false); }} className="px-4 bg-gray-100 text-gray-400 rounded-lg font-black text-[10px] uppercase">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
