import Button from "../components/ui/Button";

export default function Workshop() {
  return (
    <div className="w-full flex flex-col gap-6">
          <section
          id="comp"
          className=" pt-3 py-10 flex gap-10 justify-between items-center p-5">
            {/*kiri*/}
            <div className="w-2/3 flex-col gap-6">
              <p className="text-5xl text-red-900 font-serif font-bold">IT Workshop</p>
              <p className="text-red-900 font-sans text-3xl">“AI for a Sustainable Future: The Role of Z Generation in the Digital Era”</p> <br />
              <p className="text-1xl font-sans">IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan.
                Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital..</p> <br />
              <div className="flex gap-3">
                <Button label="Daftar Sekarang" variant="primary"></Button>
              </div>
            </div>
    
          {/*kanan*/}
            <div className="w-1/3">
              <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
              alt="maskot_seminar"
              className="w-full h-auto object-contain"/>
            </div>
          </section>
        </div>
  );
}
