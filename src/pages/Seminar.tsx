import Button from "../components/ui/Button";

export default function Seminar() {
  return (
    <div className="w-full flex flex-col gap-6">
      <section
      id="comp"
      className="py-10 flex gap-10 justify-between items-center p-5">
        {/*kiri*/}
        <div >
          <p className="text-5xl text-red-900 font-serif font-bold">IT SEMINAR</p>
          <p className="text-red-900 font-sans text-3xl">“Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”</p> <br />
          <p className="text-1xl font-sans">Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.
            Yang bertujuan mengubah paradigma dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang teknologi AI yang berpusat pada manusia.</p> <br />
          <div className="flex gap-3">
            <Button label="Daftar Sekarang" variant="primary"></Button>
          </div>
        </div>

      {/*kanan*/}
        <div>
          <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png" alt="maskot_seminar" />
        </div>
      </section>
    </div>
  );
}
