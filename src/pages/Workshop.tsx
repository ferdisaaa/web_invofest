import Button from "../components/ui/Button";

export default function Workshop() {
  return (
    <div className="w-full flex flex-col gap-6">
          <section
          id="comp"
          className="py-10 flex gap-10 justify-between items-center p-5">
            {/*kiri*/}
            <div >
              <p className="text-5xl text-red-900 font-serif font-bold">IT Workshop</p>
              <p className="text-red-900 font-sans text-3xl">“AI for a Sustainable Future: The Role of Z Generation in the Digital Era”</p> <br />
              <p className="text-1xl font-sans">IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan.
                Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital..</p> <br />
              <div className="flex gap-3">
                <Button label="Daftar Sekarang" variant="primary"></Button>
              </div>
            </div>
    
          {/*kanan*/}
            <div>
              <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png" alt="maskot_seminar" />
            </div>
          </section>
        </div>
  );
}
