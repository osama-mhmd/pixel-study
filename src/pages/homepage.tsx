import Flashcard from "@/components/flashcard";

export default function Homepage() {
  return (
    <div className="h-screen">
      <h1 className="text-center py-12">Flashcards</h1>
      <Flashcard
        className="hidden"
        front="UV Light"
        back="Ultraviolet (UV) is a form of electromagnetic radiation with wavelength shorter than that of visible light, but longer than X-rays"
      />
      <Flashcard
        front="UV Light"
        back="Ultraviolet (UV) is a form of electromagnetic radiation with wavelength shorter than that of visible light, but longer than X-rays"
      />
    </div>
  );
}
