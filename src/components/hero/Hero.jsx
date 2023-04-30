export default function Hero({title, subtitle, subtitle2}) {
  return (
    <section className="container flex-col flex px-5 py-52 justify-center">
      <h1 className="text-3xl lg:text-5xl font-bold m-3">{title}</h1>
      <p className="text-2xl lg:text-4xl m-3">{subtitle}</p>
      <p className="text-2xl lg:text-3xl m-3">{subtitle2}</p>
    </section>
  )
}