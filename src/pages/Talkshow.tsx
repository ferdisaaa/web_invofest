import Button from "../components/ui/Button";

export default function Talkshow() {
  return (
    <div className="w-full flex flex-col gap-6">
              <section
              id="comp"
              className="py-10 flex gap-10 justify-between items-center p-5">
                {/*kiri*/}
                <div >
                  <p className="text-5xl text-red-900 font-serif font-bold">IT Talkshow</p>
                  <p className="text-red-900 font-sans text-3xl">“Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”</p> <br />
                  <p className="text-1xl font-sans">Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif yang 
                    mengeksplorasi cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. 
                    yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya.</p> <br />
                  <div className="flex gap-3">
                    <Button label="Daftar Sekarang" variant="primary"></Button>
                  </div>
                </div>
        
              {/*kanan*/}
                <div>
                  <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png" alt="maskot_seminar" />
                </div>
              </section>
            </div>
  );
}
