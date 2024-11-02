import React, { useState } from 'react';
import { TextField, Button, Grid2, Typography, Box } from '@mui/material';

const carreras = {
  "ponderacion": [
    {
      "M2": false,
      "NEM": "15%",
      "Ranking": "25%",
      "Competencia Matemática 1 (M1)": "40%",
      "Competencia Matemática 2 (M2)": "NO EXIGE",
      "Competencia Lectora": "10%",
      "Ciencias": "10%",
      "Historia y Ciencias Sociales": "10%"
    },
    {
      "M2": true,
      "NEM": "15%",
      "Ranking": "20%",
      "Competencia Matemática 1 (M1)": "35%",
      "Competencia Matemática 2 (M2)": "10%",
      "Competencia Lectora": "10%",
      "Ciencias": "10%",
      "Historia y Ciencias Sociales": "10%"
    }
  ],
  "carreras": {
    "Carrera o programa académico": {
      "codigo": "Código",
      "campus": [
        {
          "campus": "Campus o Sede en que se imparte",
          "puntajeMinimo": "Puntaje Ponderado Mínimo de Postulación (*)",
          "puntajeMaximo": "Puntaje Máximo de Selección 2024",
          "puntajeSeleccion": "Puntaje Mínimo de Selección 2024",
          "vacantesDemre": "Vacantes DEMRE 2025",
          "vacantesMc": "Vacantes + MC"
        }
      ]
    },
    "Ingeniería Civil en Biotecnología*  Carrera Nueva": {
      "codigo": "15186",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "",
          "puntajeMaximo": "",
          "puntajeSeleccion": "",
          "vacantesDemre": "40",
          "vacantesMc": "5"
        }
      ]
    },
    "Arquitectura": {
      "codigo": "15180",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "550",
          "puntajeMaximo": "937",
          "puntajeSeleccion": "731,4",
          "vacantesDemre": "80",
          "vacantesMc": ""
        },
        {
          "codigo": "15380",
          "campus": "San Joaquín",
          "puntajeMinimo": "550",
          "puntajeMaximo": "905,1",
          "puntajeSeleccion": "760,1",
          "vacantesDemre": "70",
          "vacantesMc": ""
        }
      ]
    },
    "Construcción Civil": {
      "codigo": "15110",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "550",
          "puntajeMaximo": "874,9",
          "puntajeSeleccion": "645,6",
          "vacantesDemre": "35",
          "vacantesMc": "4"
        }
      ]
    },
    "Ingeniería Civil *": {
      "codigo": "15111",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "944,6",
          "puntajeSeleccion": "684,9",
          "vacantesDemre": "60",
          "vacantesMc": "4"
        },
        {
          "codigo": "15311",
          "campus": "San Joaquín",
          "puntajeMinimo": "600",
          "puntajeMaximo": "913,9",
          "puntajeSeleccion": "793,8",
          "vacantesDemre": "75",
          "vacantesMc": "4"
        }
      ]
    },
    "Ingeniería Civil Ambiental *": {
      "codigo": "15151",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "902,2",
          "puntajeSeleccion": "672,5",
          "vacantesDemre": "30",
          "vacantesMc": "2"
        }
      ]
    },
    "Ingeniería Civil de Minas *": {
      "codigo": "15312",
      "campus": [
        {
          "campus": "San Joaquín",
          "puntajeMinimo": "600",
          "puntajeMaximo": "914,6",
          "puntajeSeleccion": "753,2",
          "vacantesDemre": "90",
          "vacantesMc": "8"
        }
      ]
    },
    "Ingeniería Civil Eléctrica *": {
      "codigo": "15130",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "942,2",
          "puntajeSeleccion": "725",
          "vacantesDemre": "60",
          "vacantesMc": "4"
        }
      ]
    },
    "Ingeniería Civil Electrónica *": {
      "codigo": "15131",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "953,4",
          "puntajeSeleccion": "718,7",
          "vacantesDemre": "70",
          "vacantesMc": "4"
        }
      ]
    },
    "Ingeniería Civil Física *": {
      "codigo": "15184",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "935,6",
          "puntajeSeleccion": "737,2",
          "vacantesDemre": "30",
          "vacantesMc": "2"
        },
        {
          "codigo": "15384",
          "campus": "San Joaquín",
          "puntajeMinimo": "600",
          "puntajeMaximo": "970,4",
          "puntajeSeleccion": "7746,2",
          "vacantesDemre": "35",
          "vacantesMc": "2"
        }
      ]
    },
    "Ingeniería Civil Industrial *": {
      "codigo": "15170",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "946",
          "puntajeSeleccion": "792,7",
          "vacantesDemre": "140",
          "vacantesMc": "6"
        }
      ]
    },
    "Ingeniería Civil Informática *": {
      "codigo": "15160",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "931,8",
          "puntajeSeleccion": "760,1",
          "vacantesDemre": "120",
          "vacantesMc": "24"
        }
      ]
    },
    "Ingeniería Civil Matemática *": {
      "codigo": "15101",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "969,9",
          "puntajeSeleccion": "806,7",
          "vacantesDemre": "25",
          "vacantesMc": "3"
        },
        {
          "codigo": "15301",
          "campus": "San Joaquín",
          "puntajeMinimo": "600",
          "puntajeMaximo": "929,2",
          "puntajeSeleccion": "772,9",
          "vacantesDemre": "30",
          "vacantesMc": "3"
        }
      ]
    },
    "Ingeniería Civil Mecánica *": {
      "codigo": "15140",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "953,9",
          "puntajeSeleccion": "664,7",
          "vacantesDemre": "70",
          "vacantesMc": "6"
        },
        {
          "codigo": "15340",
          "campus": "San Joaquín",
          "puntajeMinimo": "600",
          "puntajeMaximo": "941,8",
          "puntajeSeleccion": "773,2",
          "vacantesDemre": "75",
          "vacantesMc": "6"
        }
      ]
    },
    "Ingeniería Civil Metalúrgica *": {
      "codigo": "15141",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "924,3",
          "puntajeSeleccion": "675,3",
          "vacantesDemre": "40",
          "vacantesMc": "6"
        }
      ]
    },
    "Ingeniería Civil Plan Común *": {
      "codigo": "15100",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "968,8",
          "puntajeSeleccion": "699,2",
          "vacantesDemre": "110",
          "vacantesMc": "15"
        },
        {
          "codigo": "15300",
          "campus": "San Joaquín",
          "puntajeMinimo": "600",
          "puntajeMaximo": "925,3",
          "puntajeSeleccion": "792,2",
          "vacantesDemre": "130",
          "vacantesMc": "20"
        }
      ]
    },
    "Ingeniería Civil Química *": {
      "codigo": "15150",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "935,2",
          "puntajeSeleccion": "743,2",
          "vacantesDemre": "40",
          "vacantesMc": "2"
        },
        {
          "codigo": "15350",
          "campus": "San Joaquín",
          "puntajeMinimo": "600",
          "puntajeMaximo": "926,5",
          "puntajeSeleccion": "729,9",
          "vacantesDemre": "50",
          "vacantesMc": "2"
        }
      ]
    },
    "Ingeniería Civil Telemática *": {
      "codigo": "15161",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "876,8",
          "puntajeSeleccion": "612,2",
          "vacantesDemre": "35",
          "vacantesMc": "6"
        },
        {
          "codigo": "15361",
          "campus": "San Joaquín",
          "puntajeMinimo": "600",
          "puntajeMaximo": "931,3",
          "puntajeSeleccion": "677,6",
          "vacantesDemre": "50",
          "vacantesMc": "6"
        }
      ]
    },
    "Ingeniería Comercial": {
      "codigo": "15171",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "550",
          "puntajeMaximo": "931,1",
          "puntajeSeleccion": "688,5",
          "vacantesDemre": "120",
          "vacantesMc": ""
        },
        {
          "codigo": "15271",
          "campus": "Vitacura",
          "puntajeMinimo": "550",
          "puntajeMaximo": "930",
          "puntajeSeleccion": "747,2",
          "vacantesDemre": "200",
          "vacantesMc": ""
        }
      ]
    },
    "Ingeniería en Aviación Comercial *": {
      "codigo": "15220",
      "campus": [
        {
          "campus": "Vitacura",
          "puntajeMinimo": "550",
          "puntajeMaximo": "880,3",
          "puntajeSeleccion": "683,8",
          "vacantesDemre": "35",
          "vacantesMc": "3"
        }
      ]
    },
    "Ingeniería en Biotecnología *": {
      "codigo": "15485",
      "campus": [
        {
          "campus": "Viña del Mar",
          "puntajeMinimo": "500",
          "puntajeMaximo": "877,8",
          "puntajeSeleccion": "680,4",
          "vacantesDemre": "30",
          "vacantesMc": "6"
        }
      ]
    },
    "Ingeniería en Diseño de Productos *": {
      "codigo": "15181",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "550",
          "puntajeMaximo": "824,1",
          "puntajeSeleccion": "605,1",
          "vacantesDemre": "20",
          "vacantesMc": "4"
        },
        {
          "codigo": "15381",
          "campus": "San Joaquín",
          "puntajeMinimo": "550",
          "puntajeMaximo": "830,7",
          "puntajeSeleccion": "609,5",
          "vacantesDemre": "25",
          "vacantesMc": "4"
        }
      ]
    },
    "Ingeniería en Fabricación y Diseño Industrial *": {
      "codigo": "15441",
      "campus": [
        {
          "campus": "Viña del Mar",
          "puntajeMinimo": "500",
          "puntajeMaximo": "882,8",
          "puntajeSeleccion": "516,6",
          "vacantesDemre": "20",
          "vacantesMc": "4"
        }
      ]
    },
    "Ingeniería en Informática *": {
      "codigo": "15462",
      "campus": [
        {
          "campus": "Viña del Mar",
          "puntajeMinimo": "500",
          "puntajeMaximo": "870,5",
          "puntajeSeleccion": "645,5",
          "vacantesDemre": "70",
          "vacantesMc": "10"
        }
      ]
    },
    "Ingeniería en Mantenimiento Industrial *": {
      "codigo": "15440",
      "campus": [
        {
          "campus": "Viña del Mar",
          "puntajeMinimo": "500",
          "puntajeMaximo": "771,7",
          "puntajeSeleccion": "504,3",
          "vacantesDemre": "35",
          "vacantesMc": "6"
        }
      ]
    },
    "Ingeniería en Prevención de Riesgos Laborales y Ambientales *": {
      "codigo": "15474",
      "campus": [
        {
          "campus": "Viña del Mar",
          "puntajeMinimo": "500",
          "puntajeMaximo": "828,2",
          "puntajeSeleccion": "514,6",
          "vacantesDemre": "15",
          "vacantesMc": "3"
        }
      ]
    },
    "Licenciatura en Astrofísica": {
      "codigo": "15103",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "937,8",
          "puntajeSeleccion": "739,8",
          "vacantesDemre": "25",
          "vacantesMc": "2"
        },
        {
          "codigo": "15303",
          "campus": "San Joaquín",
          "puntajeMinimo": "600",
          "puntajeMaximo": "884,6",
          "puntajeSeleccion": "701,5",
          "vacantesDemre": "30",
          "vacantesMc": "2"
        }
      ]
    },
    "Licenciatura en Física": {
      "codigo": "15102",
      "campus": [
        {
          "campus": "Casa Central Valparaíso",
          "puntajeMinimo": "600",
          "puntajeMaximo": "946,9",
          "puntajeSeleccion": "633,6",
          "vacantesDemre": "15",
          "vacantesMc": "2"
        }
      ]
    }
  }
};

const styleButtonLimpiar ={
  backgroundColor: 'transparent',
  border: '1px solid #000',
  color: '#000',
  borderRadius: '20px',
}
const styleButtonSimular ={
  backgroundColor: '#FFBF00',
  border: '1px solid #000',
  color: '#000',
  borderRadius: '20px',
}

const FormularioSimulacion = () => {
  const [resultados, setResultados] = useState([]);

  const [formData, setFormData] = useState({
    nem: '',
    ranking: '',
    competenciaLectora: '',
    competenciaMatematica1: '',
    historia: '',
    ciencias: '',
    competenciaMatematica2: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClear = () => {
    setFormData({
      nem: '',
      ranking: '',
      competenciaLectora: '',
      competenciaMatematica1: '',
      historia: '',
      ciencias: '',
      competenciaMatematica2: ''
    });
    setResultados([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userPuntajes = {
      nem: parseInt(formData.nem, 10),
      ranking: parseInt(formData.ranking, 10),
      competenciaLectora: parseInt(formData.competenciaLectora, 10),
      competenciaMatematica1: parseInt(formData.competenciaMatematica1, 10),
      competenciaMatematica2: formData.competenciaMatematica2 ? parseInt(formData.competenciaMatematica2, 10) : null,
      historia: formData.historia ? parseInt(formData.historia, 10) : null,
      ciencias: formData.ciencias ? parseInt(formData.ciencias, 10) : null
    };

    const carrerasFiltradas = Object.entries(carreras.carreras).reduce((result, [nombre, datosCarrera]) => {
      const campusValidos = datosCarrera.campus.reduce((campusArray, campus) => {
        const ponderacionSinM2 = carreras.ponderacion.find(p => !p.M2);
        const puntajePonderadoSinM2 = calcularPuntajePonderado(ponderacionSinM2, userPuntajes);

        const ponderacionConM2 = carreras.ponderacion.find(p => p.M2);
        const puntajePonderadoConM2 = calcularPuntajePonderado(ponderacionConM2, userPuntajes);

        const puntajeMinimo = parseFloat(campus.puntajeMinimo);
        const puntajeSeleccion = parseFloat(campus.puntajeSeleccion);

        // Agregar campus si cumple con el puntaje mínimo con al menos un ponderado
        if(
          (!isNaN(puntajeMinimo) && puntajePonderadoSinM2 >= puntajeMinimo && puntajePonderadoSinM2 >= puntajeSeleccion) ||
          (!isNaN(puntajeMinimo) && puntajePonderadoConM2 >= puntajeMinimo && puntajePonderadoConM2 >= puntajeSeleccion)
        ){
          campusArray.push({
            ...campus,
            puntajeCM2: puntajePonderadoConM2,
            puntajeSM2: puntajePonderadoSinM2, 
          });
        }

        return campusArray;
      }, []);

      if(campusValidos.length > 0){
        result.push({ nombre, codigo: datosCarrera.codigo, campus: campusValidos });
      }

      return result;
    }, []);

    setResultados(carrerasFiltradas);
  };
  
  const calcularPuntajePonderado = (ponderacion, puntajes) => {
    console.log(ponderacion, puntajes)
    const nem = (parseFloat(ponderacion.NEM) / 100) * puntajes.nem;
    const ranking = (parseFloat(ponderacion.Ranking) / 100) * puntajes.ranking;
    const competenciaLectora = (parseFloat(ponderacion['Competencia Lectora']) / 100) * puntajes.competenciaLectora;
    const competenciaMatematica1 = (parseFloat(ponderacion['Competencia Matemática 1 (M1)']) / 100) * puntajes.competenciaMatematica1;
  
    const competenciaMatematica2 = puntajes.competenciaMatematica2 && ponderacion['Competencia Matemática 2 (M2)'] !== 'NO EXIGE'
      ? (parseFloat(ponderacion['Competencia Matemática 2 (M2)']) / 100) * puntajes.competenciaMatematica2
      : 0;
  
    const historia = puntajes.historia ? (parseFloat(ponderacion['Historia y Ciencias Sociales']) / 100) * puntajes.historia : 0;
    const ciencias = puntajes.ciencias ? (parseFloat(ponderacion.Ciencias) / 100) * puntajes.ciencias : 0;
  
    return nem + ranking + competenciaLectora + competenciaMatematica1 + competenciaMatematica2 + historia + ciencias;
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 10, borderRadius: 2 }}>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2}>
          {/* Título */}
          <Grid2 item size={{ xs: 12 }}>
            <Typography variant="h6">Simulación de Puntajes</Typography>
          </Grid2>

          {/* Campos del formulario */}
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Notas de Enseñanza Media (NEM)"
              name="nem"
              value={formData.nem}
              onChange={handleChange}
              fullWidth
              required
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Ranking"
              name="ranking"
              value={formData.ranking}
              onChange={handleChange}
              fullWidth
              required
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Competencia Lectora"
              name="competenciaLectora"
              value={formData.competenciaLectora}
              onChange={handleChange}
              fullWidth
              required
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Competencia Matemática 1 (M1)"
              name="competenciaMatematica1"
              value={formData.competenciaMatematica1}
              onChange={handleChange}
              fullWidth
              required
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Historia y Ciencias Sociales **"
              name="historia"
              value={formData.historia}
              onChange={handleChange}
              fullWidth
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Ciencias **"
              name="ciencias"
              value={formData.ciencias}
              onChange={handleChange}
              fullWidth
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <TextField
              label="Competencia Matemática 2 (M2) **"
              name="competenciaMatematica2"
              value={formData.competenciaMatematica2}
              onChange={handleChange}
              fullWidth
              type="number"
              placeholder="Digita el puntaje"
            />
          </Grid2>

          {/* Notas y Botones */}
          <Grid2 item size={{ xs: 12}}>
            <Typography variant="body2" color="textSecondary">
              (*) Campo obligatorio (la nueva escala va desde el 100 al 1000)
            </Typography>
            <Typography variant="body2" color="textSecondary">
              (**) Prueba optativa, omitir si no se rindió.
            </Typography>
          </Grid2>

          <Grid2 item size={{ xs: 12, sm: 6}}>
            <Button onClick={handleClear} variant="outlined" style={styleButtonLimpiar} fullWidth>
              Limpiar campos
            </Button>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6}}>
            <Button type="submit" variant="contained" style={styleButtonSimular} fullWidth>
              Hacer simulación
            </Button>
          </Grid2>
        </Grid2>
      </form>
      {resultados.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6">Carreras que cumplen con los requisitos</Typography>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Carrera</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Campus</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Puntaje Mínimo</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Puntaje Selección</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Puntaje Simulación Con M2</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Puntaje Simulación Sin M2</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map(carrera => (
                carrera.campus.map((campus, index) => (
                  <tr key={`${carrera.codigo}-${index}`}>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{carrera.nombre}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{campus.campus}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{campus.puntajeMinimo}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{campus.puntajeSeleccion}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{campus.puntajeCM2.toFixed(2)}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{campus.puntajeSM2.toFixed(2)}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </Box>
      )}
    </Box>
  );
};

export default FormularioSimulacion;
