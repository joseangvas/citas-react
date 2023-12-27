const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">José</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
        <span className="font-normal normal-case">10 Diciembre 2023</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales odio sed ultrices blandit. Sed blandit, ligula tristique fringilla euismod, dolor libero semper elit, non vehicula justo libero a arcu. Suspendisse consectetur diam eget tincidunt vulputate. Nunc blandit diam non felis tincidunt, sed pharetra urna facilisis. Sed egestas massa ac malesuada finibus. 

        Etiam dignissim, felis eu cursus scelerisque, ante risus blandit quam, sed ultrices nibh mi vel ex. Duis laoreet tincidunt ultrices. Integer sit amet massa vitae ante aliquet fringilla eget vitae mi.</span>
      </p>
    </div>
  )
}

export default Paciente