export default function PembicaraIndex() {
  return (
    <div className="p-6">
      <h1 className="font-bold font-2xl pb-10">Add new Pembicara</h1>
      <label className="">Nama :</label><br />
      <input type="text" className="border border-gray-300 rounded-md p-2" /> <br />  
      <label className="pb-2">Role :</label><br />
      <select name="role" id="role" className="border border-gray-300 rounded-md p-2">
        <option value="">Pilih Role</option>
        <option value="pembicara">Pembicara</option>
        <option value="moderator">Moderator</option>
      </select>

      <div className="form-group">
          <label htmlFor="foto">Foto</label>
            <div className="input-border border border-gray-300 rounded-md p-2">
              <input type="file" id="foto" name="foto" accept="image/*"/>
            </div>
      </div>
    </div>
  );
}