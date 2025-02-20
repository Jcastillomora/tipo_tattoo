/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { CalendarPlusIcon as LucideCalendarPlusIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Badge as RadixThemesBadge, Button as RadixThemesButton, Card as RadixThemesCard, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { Control as RadixFormControl, Field as RadixFormField, Label as RadixFormLabel, Root as RadixFormRoot, Submit as RadixFormSubmit } from "@radix-ui/react-form"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Heading_b2ff34a9fadb7c099517b0e1009e620e () {
  
  const reflex___state____state__tipo_tattoer___backend___backend____state = useContext(StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state)





  
  return (
    <RadixThemesHeading className={"text-center"} size={"4"} weight={"bold"}>

{reflex___state____state__tipo_tattoer___backend___backend____state.current_texts["form_header"]}
</RadixThemesHeading>
  )
}

export function Fragment_f2f0916d2fcc08b7cdf76cec697f0750 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Root_2b12def4cb3f8cb37a62b00d9d264f2c () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_c080d665cc0b55d3fb3355d2bdaf3de6 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (window["alert"]((JSON.stringify(form_data))))), ["callback"] : null }), ({  })))], args, ({  }))))());

        if (false) {
            $form.reset()
        }
    })
    




  
  return (
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%" })} onSubmit={handleSubmit_c080d665cc0b55d3fb3355d2bdaf3de6}>

<RadixThemesFlex direction={"column"} gap={"2"}>

<RadixThemesFlex css={({ ["flexDirection"] : "row" })} gap={"6"}>

<RadixFormField className={"Field "} css={({ ["display"] : "grid", ["marginBottom"] : "10px", ["width"] : "100%" })} name={"name"}>

<RadixThemesFlex direction={"column"} gap={"1"}>

<RadixFormLabel className={"Label "} css={({ ["fontSize"] : "15px", ["fontWeight"] : "500", ["lineHeight"] : "35px" })}>

{"Name"}
</RadixFormLabel>
<RadixFormControl asChild={true} className={"Control "}>

<RadixThemesTextField.Root placeholder={"Nombre"} type={"text"}/>
</RadixFormControl>
</RadixThemesFlex>
</RadixFormField>
<RadixFormField className={"Field "} css={({ ["display"] : "grid", ["marginBottom"] : "10px", ["width"] : "100%" })} name={"last_name"}>

<RadixThemesFlex direction={"column"} gap={"1"}>

<RadixFormLabel className={"Label "} css={({ ["fontSize"] : "15px", ["fontWeight"] : "500", ["lineHeight"] : "35px" })}>

{"Last Name"}
</RadixFormLabel>
<RadixFormControl asChild={true} className={"Control "}>

<RadixThemesTextField.Root placeholder={"Apellido"} type={"text"}/>
</RadixFormControl>
</RadixThemesFlex>
</RadixFormField>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["flexDirection"] : "row" })} gap={"6"}>

<RadixFormField className={"Field "} css={({ ["display"] : "grid", ["marginBottom"] : "10px", ["width"] : "100%" })} name={"email"}>

<RadixThemesFlex direction={"column"} gap={"1"}>

<RadixFormLabel className={"Label "} css={({ ["fontSize"] : "15px", ["fontWeight"] : "500", ["lineHeight"] : "35px" })}>

{"Email"}
</RadixFormLabel>
<RadixFormControl asChild={true} className={"Control "}>

<RadixThemesTextField.Root placeholder={"Email"} type={"email"}/>
</RadixFormControl>
</RadixThemesFlex>
</RadixFormField>
<RadixFormField className={"Field "} css={({ ["display"] : "grid", ["marginBottom"] : "10px", ["width"] : "100%" })} name={"phonwe"}>

<RadixThemesFlex direction={"column"} gap={"1"}>

<RadixFormLabel className={"Label "} css={({ ["fontSize"] : "15px", ["fontWeight"] : "500", ["lineHeight"] : "35px" })}>

{"Phone"}
</RadixFormLabel>
<RadixFormControl asChild={true} className={"Control "}>

<RadixThemesTextField.Root placeholder={"Tel\u00e9fono"} type={"tel"}/>
</RadixFormControl>
</RadixThemesFlex>
</RadixFormField>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["flexDirection"] : "row" })} gap={"6"}>

<RadixFormField className={"Field "} css={({ ["display"] : "grid", ["marginBottom"] : "10px", ["width"] : "100%" })} name={"area"}>

<RadixThemesFlex direction={"column"} gap={"1"}>

<RadixFormLabel className={"Label "} css={({ ["fontSize"] : "15px", ["fontWeight"] : "500", ["lineHeight"] : "35px" })}>

{"Area "}
</RadixFormLabel>
<RadixFormControl asChild={true} className={"Control "}>

<RadixThemesTextField.Root placeholder={"Lugar"} type={"text"}/>
</RadixFormControl>
</RadixThemesFlex>
</RadixFormField>
<RadixFormField className={"Field "} css={({ ["display"] : "grid", ["marginBottom"] : "10px", ["width"] : "100%" })} name={"event_date"}>

<RadixThemesFlex direction={"column"} gap={"1"}>

<RadixFormLabel className={"Label "} css={({ ["fontSize"] : "15px", ["fontWeight"] : "500", ["lineHeight"] : "35px" })}>

{"Date"}
</RadixFormLabel>
<RadixFormControl asChild={true} className={"Control "}>

<RadixThemesTextField.Root placeholder={"Fecha"} type={"date"}/>
</RadixFormControl>
</RadixThemesFlex>
</RadixFormField>
</RadixThemesFlex>
<RadixFormField className={"Field "} css={({ ["display"] : "grid", ["marginBottom"] : "10px", ["width"] : "100%" })} name={"details"}>

<RadixThemesFlex direction={"column"} gap={"1"}>

<RadixFormLabel className={"Label "} css={({ ["fontSize"] : "15px", ["fontWeight"] : "500", ["lineHeight"] : "35px" })}>

{"Details"}
</RadixFormLabel>
<RadixFormControl asChild={true} className={"Control "}>

<RadixThemesTextField.Root placeholder={"Detalles"} type={"text"}/>
</RadixFormControl>
</RadixThemesFlex>
</RadixFormField>
</RadixThemesFlex>
<RadixFormSubmit asChild={true} className={"Submit "} css={({ ["width"] : "100%" })}>

<RadixThemesButton color={"gold"} radius={"large"} variant={"soft"}>

{"Enviar"}
</RadixThemesButton>
</RadixFormSubmit>
</RadixFormRoot>
  )
}

export function Errorboundary_ba3d6528c265c880d1ffb4185eab224c () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesFlex align={"center"} css={({ ["width"] : "100%" })} gap={"3"}>

<RadixThemesCard className={"bg-slate-600 shadow-lg items-center"} css={({ ["width"] : "100%", ["align"] : "center" })} size={"3"}>

<RadixThemesFlex css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%", ["alignItems"] : "center", ["width"] : "100%" })} direction={"row"} gap={"4"}>

<RadixThemesBadge color={"mint"} css={({ ["padding"] : "0.65rem" })} radius={"full"}>

<LucideCalendarPlusIcon css={({ ["textDecoration"] : "none", ["color"] : "var(--current-color)" })} size={32}/>
</RadixThemesBadge>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%", ["alignItems"] : "start" })} direction={"column"} gap={"1"}>

<Heading_b2ff34a9fadb7c099517b0e1009e620e/>
<Text_a51e58fbaad3819fd07c2499becdfd1a/>
</RadixThemesFlex>
</RadixThemesFlex>
<Root_2b12def4cb3f8cb37a62b00d9d264f2c/>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
<NextHead>

<title>

{"Tipotattoer | Agenda"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))




  
  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Text_a51e58fbaad3819fd07c2499becdfd1a () {
  
  const reflex___state____state__tipo_tattoer___backend___backend____state = useContext(StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state)





  
  return (
    <RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"2"}>

{reflex___state____state__tipo_tattoer___backend___backend____state.current_texts["form_text"]}
</RadixThemesText>
  )
}

export function Div_602c14884fa2de27f522fe8f94374b02 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_ba3d6528c265c880d1ffb4185eab224c/>
  )
}
