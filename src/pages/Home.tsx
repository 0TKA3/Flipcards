import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
        <Navigation></Navigation>
        <main className="main__container flex justify-center items-center mt-11">
          <h1 className="text-6xl font-bold">Создайте свои карточки для запоминания!</h1>
        </main>
    </>
  )
}
