import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import projects from "../../data/HomeSectionProyect";  // Importamos la lista

export default function ProyectSection() {
    return (
        <section className="py-16 px-8 text-center">
            <div>
                <h2 className="text-6xl text-left font-bold font-space-grotesk mb-3 lg:text-6xl md:text-5xl sm:text-4xl"> 
                    <span className="text-red-600">Innovación,</span> <span className="text-blue-900">desarrollo</span> y <span className="text-cafe">sostenibilidad</span>:
                </h2>
                <p className="text-5xl text-left font-bebas-neue mt-2">
                    LOS PILARES DE CADA PROYECTO QUE CREO.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
                {projects.map((project, index) => (
                <div key={index} className={`${project.color} p-6 rounded-2xl text-white flex flex-col items-center relative shadow-lg`}>
                    <h3 className="text-4xl font-bebas-neue">{project.title}</h3>
                    <p className="font-space-grotesk text-m mt-3">{project.description}</p>
                    <img src={project.image} alt={project.title} className="mt-4 w-40 h-40 object-cover rounded-lg" />
                    <Link to={project.route} className="absolute bottom-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:scale-110 transition">
                    <FaPlus size={20} />
                    </Link>
                </div>
                ))}
            </div>
        </section>
    );
}
