import Curso from "./models/curso.js"
import Matricula from "./models/matricula.js"
import Materia from "./models/materia.js"
import Boletim from "./models/boletim.js"
import Aluno from "./models/aluno.js"
import Falta from "./models/falta.js"

export let banco = {
    "alunos": [
        new Aluno(0, "Pedro Carlos Solares", "")
    ],
    "materias": [
        new Materia(0, 0, "segurança de sistemas de informação"),
        new Materia(1, 0, "banco de dados III"),
        new Materia(2, 0, "internet e protocolos"),
        new Materia(3, 0, "programação web III"),
        
        new Materia(4, 1, "x"),
        new Materia(5, 1, "y"),
        new Materia(6, 1, "z"),
    ],
    "boletins": [
        new Boletim(0, 0, 0, new Date(2024, 2, 1), 1),
        new Boletim(1, 0, 0, new Date(2024, 2, 1), 1),

        new Boletim(0, 0, 1, new Date(2024, 2, 1), 5),
        new Boletim(1, 0, 1, new Date(2024, 2, 1), 5),

        new Boletim(2, 0, 2, new Date(2024, 2, 1), 10),
        new Boletim(3, 0, 2, new Date(2024, 2, 1), 10),

        new Boletim(4, 0, 3, new Date(2024, 2, 1), 8),
        new Boletim(5, 0, 3, new Date(2024, 2, 1), 8),

        
        new Boletim(6, 0, 0, new Date(2024, 5, 1), 1),
        new Boletim(7, 0, 0, new Date(2024, 5, 1), 10),
        
        new Boletim(8, 0, 1, new Date(2024, 5, 1), 10),
        new Boletim(9, 0, 1, new Date(2024, 5, 1), 10),
        
        new Boletim(10, 0, 2, new Date(2024, 5, 1), 5),
        new Boletim(11, 0, 2, new Date(2024, 5, 1), 1),
        
        new Boletim(10, 0, 3, new Date(2024, 5, 1), 8),
        new Boletim(11, 0, 3, new Date(2024, 5, 1), 8)
    ],
    "matriculas": [
        new Matricula(0, 1, 1),
        new Matricula(1, 1, 2),
        new Matricula(2, 1, 3),
        new Matricula(3, 1, 4),
    ],
    "cursos": [
        new Curso(0, "desenvolvimento de sistemas")
    ],
    "faltas": [
        new Falta(0, 0, 0, ""),
        new Falta(0, 0, 0, ""),
        new Falta(0, 0, 0, ""),
        
        new Falta(0, 0, 1, ""),
        new Falta(0, 0, 1, ""),

        new Falta(0, 0, 2, ""), 
    ]
}

export let consultas = {
    "materiasCurso": (idCurso) => {
        return banco.materias.filter((materia) => {
            if (materia.idCurso == idCurso) return materia }) 
    },
    "aluno": (idAluno) => {
        return banco.alunos.find((aluno) => {if (aluno.id == idAluno) return aluno })
    },
    "notasAlunoMateria": (idAluno, idMateria) => {
        return banco.boletins.filter((boletim) => { 
            if (boletim.idAluno == idAluno && boletim.idMateria == idMateria) return boletim }) 
    },
    "faltasAluno": (idAluno, idMateria) => {
        return banco.faltas.filter((falta) => {
            if (falta.idAluno == idAluno && falta.idMateria == idMateria) return falta }) 
    }
}

export default banco