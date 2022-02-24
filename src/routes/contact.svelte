<script context="module">
    export const prerender = true;
</script>


<div class="flex justify-center py-16">
  <form name="test" method="post" netlify netlify-honeypot="bot-field" class="w-full max-w-6xl">
    <input type="hidden" name="form-name" value="test" />
    <input type="text" name="bot-field" />
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Nombre
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" type="text" placeholder="Nombre">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Apellido
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="apellido" type="text" placeholder="Doe">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            Ciudad
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="ciudad" id="grid-city" type="text" placeholder="Ciudad">
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Estado
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="estado" id="grid-state">
              <option value="no">Seleccione uno...</option>
              <option value="Aguascalientes">Aguascalientes</option>
              <option value="Baja California">Baja California</option>
              <option value="Baja California Sur">Baja California Sur</option>
              <option value="Campeche">Campeche</option>
              <option value="Chiapas">Chiapas</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="CDMX">Ciudad de México</option>
              <option value="Coahuila">Coahuila</option>
              <option value="Colima">Colima</option>
              <option value="Durango">Durango</option>
              <option value="Estado de México">Estado de México</option>
              <option value="Guanajuato">Guanajuato</option>
              <option value="Guerrero">Guerrero</option>
              <option value="Hidalgo">Hidalgo</option>
              <option value="Jalisco">Jalisco</option>
              <option value="Michoacán">Michoacán</option>
              <option value="Morelos">Morelos</option>
              <option value="Nayarit">Nayarit</option>
              <option value="Nuevo León">Nuevo León</option>
              <option value="Oaxaca">Oaxaca</option>
              <option value="Puebla">Puebla</option>
              <option value="Querétaro">Querétaro</option>
              <option value="Quintana Roo">Quintana Roo</option>
              <option value="San Luis Potosí">San Luis Potosí</option>
              <option value="Sinaloa">Sinaloa</option>
              <option value="Sonora">Sonora</option>
              <option value="Tabasco">Tabasco</option>
              <option value="Tamaulipas">Tamaulipas</option>
              <option value="Tlaxcala">Tlaxcala</option>
              <option value="Veracruz">Veracruz</option>
              <option value="Yucatán">Yucatán</option>
              <option value="Zacatecas">Zacatecas</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Correo
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="email" type="email" placeholder="Correo">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Teléfono
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="telefono" type="number" placeholder="+521234567890">
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full">
          <p>Experiencia</p>
          <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
            <div class="flex items-center mr-4 mb-4">
              <input id="radio1" type="radio" name="radio" class="hidden" checked />
              <label for="radio1" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Best choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio2" type="radio" name="radio" class="hidden" />
              <label for="radio2" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Second choice</label>
            </div>
            
            <div class="flex items-center mr-4 mb-4">
              <input id="radio3" type="radio" name="radio" class="hidden" />
              <label for="radio3" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Third choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio4" type="radio" name="radio" class="hidden" />
              <label for="radio4" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Fourth choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio5" type="radio" name="radio" class="hidden" />
              <label for="radio5" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Choice Five with a longer title</label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full">
          <p>Dias por semana</p>
          <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
            <div class="flex items-center mr-4 mb-4">
              <input id="radio1" type="radio" name="radio" class="hidden" checked />
              <label for="radio1" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Best choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio2" type="radio" name="radio" class="hidden" />
              <label for="radio2" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Second choice</label>
            </div>
            
            <div class="flex items-center mr-4 mb-4">
              <input id="radio3" type="radio" name="radio" class="hidden" />
              <label for="radio3" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Third choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio4" type="radio" name="radio" class="hidden" />
              <label for="radio4" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Fourth choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio5" type="radio" name="radio" class="hidden" />
              <label for="radio5" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Choice Five with a longer title</label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full">
          <p>Horas por ride</p>
          <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
            <div class="flex items-center mr-4 mb-4">
              <input id="radio1" type="radio" name="radio" class="hidden" checked />
              <label for="radio1" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Best choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio2" type="radio" name="radio" class="hidden" />
              <label for="radio2" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Second choice</label>
            </div>
            
            <div class="flex items-center mr-4 mb-4">
              <input id="radio3" type="radio" name="radio" class="hidden" />
              <label for="radio3" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Third choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio4" type="radio" name="radio" class="hidden" />
              <label for="radio4" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Fourth choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio5" type="radio" name="radio" class="hidden" />
              <label for="radio5" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Choice Five with a longer title</label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full">
        <p>Horas por semana</p>
          <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
            <div class="flex items-center mr-4 mb-4">
              <input id="radio1" type="radio" name="radio" class="hidden" checked />
              <label for="radio1" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Best choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio2" type="radio" name="radio" class="hidden" />
              <label for="radio2" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Second choice</label>
            </div>
            
            <div class="flex items-center mr-4 mb-4">
              <input id="radio3" type="radio" name="radio" class="hidden" />
              <label for="radio3" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Third choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio4" type="radio" name="radio" class="hidden" />
              <label for="radio4" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Fourth choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio5" type="radio" name="radio" class="hidden" />
              <label for="radio5" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Choice Five with a longer title</label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full">
          <p>Fondo semanal</p>
          <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
            <div class="flex items-center mr-4 mb-4">
              <input id="radio1" type="radio" name="radio" class="hidden" checked />
              <label for="radio1" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Best choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio2" type="radio" name="radio" class="hidden" />
              <label for="radio2" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Second choice</label>
            </div>
            
            <div class="flex items-center mr-4 mb-4">
              <input id="radio3" type="radio" name="radio" class="hidden" />
              <label for="radio3" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Third choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio4" type="radio" name="radio" class="hidden" />
              <label for="radio4" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Fourth choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio5" type="radio" name="radio" class="hidden" />
              <label for="radio5" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Choice Five with a longer title</label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full">
        <p>Competicion/Recreacion</p>
          <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
            <div class="flex items-center mr-4 mb-4">
              <input id="radio1" type="radio" name="radio" class="hidden" checked />
              <label for="radio1" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Best choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio2" type="radio" name="radio" class="hidden" />
              <label for="radio2" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Second choice</label>
            </div>
            
            <div class="flex items-center mr-4 mb-4">
              <input id="radio3" type="radio" name="radio" class="hidden" />
              <label for="radio3" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Third choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio4" type="radio" name="radio" class="hidden" />
              <label for="radio4" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Fourth choice</label>
            </div>
          
            <div class="flex items-center mr-4 mb-4">
              <input id="radio5" type="radio" name="radio" class="hidden" />
              <label for="radio5" class="flex items-center cursor-pointer">
              <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              Choice Five with a longer title</label>
            </div>
          </div>
        </div>
      </div>
      <p>
          <button class=" hover:bg-white hover:text-fuga-pink transition-all border  border-fuga-pink  bg-fuga-pink font-medium text-white py-2 px-4 font-ubuntu uppercase rounded-lg group" type="submit">Send</button>
      </p>
  </form>
</div>

<style>
  input[type="radio"] + label span {
    transition: background .2s, transform .2s;
  }

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span{
  transform: scale(1.2);
} 

input[type="radio"]:checked + label span {
  background-color: #e50d4e;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label{
   color: #e50d4e;
}
</style>