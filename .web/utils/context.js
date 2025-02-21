import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "$/utils/state.js"

export const initialState = {"reflex___state____state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.tipo_tattoer___backend___backend____state": {"all_areas": ["Destructurato", "Ilustrativo"], "current_texts": {"header": "Soy Ignacio, tatuador especializado en estilos destrutturato e ilustrativo. Mi pasión es crear diseños personalizados que expresen historias únicas. Con experiencia internacional, trabajo en estudios reconocidos, combinando técnica y creatividad para brindar un servicio de calidad. Me esfuerzo por conectar con mis clientes y plasmar su visión en arte permanente", "subtitle": "Conoce mis trabajos", "paragraph": "Este es un párrafo de ejemplo en español.", "nav1": "Home", "nav2": "Servicios", "nav3": "Contacto", "nav4": "Galería", "form_header": "Reserva tu cita", "form_text": "Completa el formulario para reservar tu cita", "wsp_text": "¡Contáctame por WhatsApp!"}, "en": {"header": "", "subtitle": "", "paragraph": "", "nav1": "", "nav2": "", "nav3": "", "nav4": "", "form_header": "", "form_text": "", "wsp_text": ""}, "es": {"header": "Soy Ignacio, tatuador especializado en estilos destrutturato e ilustrativo. Mi pasión es crear diseños personalizados que expresen historias únicas. Con experiencia internacional, trabajo en estudios reconocidos, combinando técnica y creatividad para brindar un servicio de calidad. Me esfuerzo por conectar con mis clientes y plasmar su visión en arte permanente", "subtitle": "Conoce mis trabajos", "paragraph": "Este es un párrafo de ejemplo en español.", "nav1": "Home", "nav2": "Servicios", "nav3": "Contacto", "nav4": "Galería", "form_header": "Reserva tu cita", "form_text": "Completa el formulario para reservar tu cita", "wsp_text": "¡Contáctame por WhatsApp!"}, "message_status": "", "preference_id": "GENERATED_PREFERENCE_ID", "search_term": "", "selected_areas": [], "show_english": false}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}}

export const defaultColorMode = "system"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__tipo_tattoer___backend___backend____state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2025-02-21 12:29:55.328896"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__tipo_tattoer___backend___backend____state, dispatch_reflex___state____state__tipo_tattoer___backend___backend____state] = useReducer(applyDelta, initialState["reflex___state____state.tipo_tattoer___backend___backend____state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.tipo_tattoer___backend___backend____state": dispatch_reflex___state____state__tipo_tattoer___backend___backend____state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
    }
  }, [])

  return (
    <StateContexts.reflex___state____state.Provider value={ reflex___state____state }>
    <StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state.Provider value={ reflex___state____state__tipo_tattoer___backend___backend____state }>
    <StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider value={ reflex___state____state__reflex___state____on_load_internal_state }>
    <StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider value={ reflex___state____state__reflex___state____frontend_event_exception_state }>
    <StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider value={ reflex___state____state__reflex___state____update_vars_internal_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider>
    </StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state.Provider>
    </StateContexts.reflex___state____state.Provider>
  )
}