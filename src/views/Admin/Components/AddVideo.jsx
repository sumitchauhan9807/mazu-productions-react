import { useRef } from "react"
import { useAlert } from 'react-alert'
function Modal(props) {
  const alertUser = useAlert()

  let name = useRef('')
  let source = useRef('')
  let file = useRef('')

  const sources = [
    {name:"XHAMSTER",value:'xham'},
    {name:"CAMS",value:'cams'},
    {name:"FAPHOUSE",value:'faphouse'},
    {name:"MANYVID",value:'manyvid'},
    {name:"MAZU_NETWORK",value:'mazu'},

  ]

  const add = () =>{
    if(name.current.value == '') return alertUser.error('Please select a name')
    if(!file.current.files.length) return alertUser.error('Please select a video cover')
    props.addVideo({
      name:name.current.value,
      source:source.current.value,
      cover:file.current.files
    })
  }
  return (
  <div>
   <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <form className="w-full max-w-sm">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                    Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input ref={name} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Video Name" />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                    Source
                  </label>
                </div>
                <div class="relative md:w-2/3">
                  <select ref={source} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    {sources.map((source)=>{
                      return <option value={source.value}>{source.name}</option>
                    })}
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                    Cover
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input  ref={file} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="file" accept=".png,.jpg,.jpeg"  />
                </div>
              </div>
            </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button onClick={add} type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Add</button>
              <button onClick={()=>{props.toggleAddVideoModal(false)}} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal