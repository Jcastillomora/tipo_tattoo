/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { ChevronDownIcon as LucideChevronDownIcon, FacebookIcon as LucideFacebookIcon, InstagramIcon as LucideInstagramIcon, MenuIcon as LucideMenuIcon, PaletteIcon as LucidePaletteIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Section as RadixThemesSection, Separator as RadixThemesSeparator, Switch as RadixThemesSwitch, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import Script from "next/script"
import NextLink from "next/link"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Errorboundary_62e1be9f4056e2a67ee12d35546f931e () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const ref_collections = useRef(null); refs["ref_collections"] = ref_collections;
  const ref_galeria = useRef(null); refs["ref_galeria"] = ref_galeria;


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesFlex align={"center"} className={"rx-Stack bg-gray-100"} css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0" })} direction={"column"} gap={"0"}>

<RadixThemesBox>

<Script css={({ ["defer"] : true })} src={"https://sdk.mercadopago.com/js/v2"} strategy={"afterInteractive"}/>
</RadixThemesBox>
<RadixThemesFlex className={"bg-gradient-to-r from-slate-500 to-slate-200 px-10 py-10"} css={({ ["width"] : "100%" })} gap={"0"}>

<RadixThemesBox css={({ ["width"] : "100%", ["spacinf"] : "0", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesBox className={"text-white animate-pulse animate-duration-500text-lg sm:text-xl md:text-xl lg:text-2xl relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"} css={({ ["weight"] : "bold" })}>

<RadixThemesText as={"span"} className={"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9c775d_0%,#ed6f15_50%,#adc965_100%)]"} css={({ ["textDecoration"] : "none" })}>

{""}
</RadixThemesText>
<RadixThemesText as={"p"} className={"font-bold inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-500 p-5 font-medium text-white backdrop-blur-3xl gap-2 undefined"} css={({ ["textDecoration"] : "none" })}>

{"Tipo Tattooer"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"end"} gap={"5"}>

<Link_485741baf05dcc3a75961be8c3408828/>
<RadixThemesDropdownMenu.Root css={({ ["color"] : "#ffffff" })}>

<RadixThemesDropdownMenu.Trigger>

<RadixThemesButton className={"text-slate-500"} css={({ ["weight"] : "medium" })} size={"3"} variant={"ghost"}>

<Text_30bfa07aac7c712d6830ac81b3b39ee0/>
<LucideChevronDownIcon css={({ ["textDecoration"] : "none", ["color"] : "var(--current-color)" })}/>
</RadixThemesButton>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content className={"bg-slate-200 text-slate-500"}>

<RadixThemesDropdownMenu.Item>

{"Service 1"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item>

{"Service 2"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item>

{"Service 3"}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
<Link_724686c06324770adce2b3a770e5ff82/>
<Link_247fe42032eac05b9c354ab5b3a30913/>
<RadixThemesBadge color={"indigo"} css={({ ["color"] : "white" })} highContrast={true} radius={"full"} size={"2"} variant={"outline"}>

<RadixThemesText as={"p"} className={"text-slate-500"} css={({ ["textDecoration"] : "none" })} size={"1"}>

{"Spa"}
</RadixThemesText>
<Switch_80ab02ff86cd9ac80bc7e2e457b31131/>
<RadixThemesText as={"p"} className={"text-slate-500"} css={({ ["textDecoration"] : "none" })} size={"1"}>

{"En"}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["color"] : "#ffffff" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesBox className={"text-white animate-pulse animate-duration-500text-lg sm:text-2xl md:text-2xl lg:text-3xl relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"} css={({ ["weight"] : "bold" })}>

<RadixThemesText as={"span"} className={"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9c775d_0%,#ed6f15_50%,#adc965_100%)]"} css={({ ["textDecoration"] : "none" })}>

{""}
</RadixThemesText>
<RadixThemesText as={"p"} className={"p-10 font-bold inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-500 px-7 py-7 font-medium text-white backdrop-blur-3xl gap-2 undefined"} css={({ ["textDecoration"] : "none" })}>

{"Tipo Tattooer"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesDropdownMenu.Root className={"bg-gradient-to-r from-slate-500 to-slate-200"} css={({ ["justify"] : "end" })}>

<RadixThemesDropdownMenu.Trigger>

<LucideMenuIcon css={({ ["textDecoration"] : "none", ["color"] : "var(--current-color)" })} size={30}/>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<Link_485741baf05dcc3a75961be8c3408828/>
<RadixThemesDropdownMenu.Sub>

<RadixThemesDropdownMenu.SubTrigger>

{"Services"}
</RadixThemesDropdownMenu.SubTrigger>
<RadixThemesDropdownMenu.SubContent>

<RadixThemesDropdownMenu.Item>

{"Service 1"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item>

{"Service 2"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item>

{"Service 3"}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.SubContent>
</RadixThemesDropdownMenu.Sub>
<Link_6696505112d16f7dcdc929581c8f2e7b/>
</RadixThemesDropdownMenu.Content>
<RadixThemesBadge color={"indigo"} css={({ ["color"] : "white" })} highContrast={true} radius={"full"} size={"2"} variant={"outline"}>

<RadixThemesText as={"p"} className={"text-slate-500"} css={({ ["textDecoration"] : "none" })} size={"1"}>

{"Spa"}
</RadixThemesText>
<Switch_80ab02ff86cd9ac80bc7e2e457b31131/>
<RadixThemesText as={"p"} className={"text-slate-500"} css={({ ["textDecoration"] : "none" })} size={"1"}>

{"En"}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesFlex className={"w-full h-64 sm:h-96 md:h-screen"} css={({ ["backgroundImage"] : "url('/tipo_banner.JPG')", ["backgroundSize"] : "cover", ["backgroundPosition"] : "center", ["backgroundRepeat"] : "no-repeat" })}>

<RadixThemesBox className={"w-full h-full flex text-left items-center p-10"}>

<RadixThemesBox className={"text-white animate-pulse animate-duration-500text-3xl sm:text-4xl md:text-5xl lg:text-5xl relative inline-flex h-24 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"} css={({ ["weight"] : "bold" })}>

<RadixThemesText as={"span"} className={"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9c775d_0%,#ed6f15_50%,#adc965_100%)]"} css={({ ["textDecoration"] : "none" })}>

{""}
</RadixThemesText>
<RadixThemesText as={"p"} className={"p-10 font-bold inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-500 px-7 py-7 font-medium text-white backdrop-blur-3xl gap-2 undefined"} css={({ ["textDecoration"] : "none" })}>

{"Tipo Tattooer"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex>

<img src={"/revista3.jpg"}/>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesSection className={"bg-gray-100"} id={"collections"} ref={ref_collections} size={"2"}>

<RadixThemesBox className={"py-16 px-4 sm:px-6 lg:px-8"}>

<RadixThemesBox className={"mx-auto max-w-7xl"}>

<RadixThemesHeading className={"text-3xl font-bold text-gray-900"} size={"5"}>

{"Collections"}
</RadixThemesHeading>
<RadixThemesText as={"p"} className={"mt-2 text-gray-600"} css={({ ["textDecoration"] : "none" })}>

{"Explora nuestras selecciones para encontrar la pieza perfecta."}
</RadixThemesText>
<RadixThemesBox className={"mt-8 grid space-y-12 lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"}>

<RadixThemesBox className={"group relative"}>

<Zoom>

<img alt={"Desk with accessories."} className={"w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1"} src={"/revista1.jpg"}/>
</Zoom>
<RadixThemesText as={"p"} className={"text-base font-semibold text-gray-900"} css={({ ["textDecoration"] : "none" })}>

{"Work from home accessories"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox className={"group relative"}>

<Zoom>

<img alt={"Wood table with mug and journal."} className={"w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1"} src={"/revista2.jpg"}/>
</Zoom>
<RadixThemesText as={"p"} className={"text-base font-semibold text-gray-900"} css={({ ["textDecoration"] : "none" })}>

{"Journals and note-taking"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox className={"group relative"}>

<Zoom>

<img alt={"Collection of insulated travel bottles."} className={"w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1"} src={"/revista3.jpg"}/>
</Zoom>
<RadixThemesText as={"p"} className={"text-base font-semibold text-gray-900"} css={({ ["textDecoration"] : "none" })}>

{"Daily commute essentials"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesSection>
<RadixThemesGrid className={"p-4"} columns={({ ["xs"] : "1", ["sm"] : "2", ["md"] : "3", ["lg"] : "3" })} css={({ ["width"] : "100%" })} gap={"1"}>

<RadixThemesBox className={"group relative cursor-pointer overflow-hidden bg-slate-300 rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"}>

<RadixThemesText as={"span"} className={"absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-slate-200 to-slate-700 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"} css={({ ["textDecoration"] : "none" })}>

{""}
</RadixThemesText>
<RadixThemesBox className={"relative z-10 mx-auto max-w-md"}>

<RadixThemesText as={"span"} className={"grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-slate-500 to-slate-700 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-slate-600 group-hover:to-slate-300"} css={({ ["textDecoration"] : "none" })}>

<LucidePaletteIcon className={"h-12 w-12 text-white transition-all"} css={({ ["textDecoration"] : "none", ["color"] : "var(--current-color)" })}/>
</RadixThemesText>
<RadixThemesBox className={"space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white"}>

<RadixThemesText as={"p"} className={"font-medium"} css={({ ["textDecoration"] : "none" })}>

{"Elevate your experience with smoother transitions and vibrant design. Perfect for prototyping and sharing ideas in style."}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox className={"pt-6 text-lg font-semibold leading-7"}>

<RadixThemesText as={"span"} className={"text-purple-500 transition-all duration-500 group-hover:text-white"} css={({ ["textDecoration"] : "none" })}>

{"Explore Documentation \u2192"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesBox className={"group relative cursor-pointer overflow-hidden bg-slate-300 rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"}>

<RadixThemesText as={"span"} className={"absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-slate-200 to-slate-700 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"} css={({ ["textDecoration"] : "none" })}>

{""}
</RadixThemesText>
<RadixThemesBox className={"relative z-10 mx-auto max-w-md"}>

<RadixThemesText as={"span"} className={"grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-slate-500 to-slate-700 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-slate-600 group-hover:to-slate-300"} css={({ ["textDecoration"] : "none" })}>

<LucidePaletteIcon className={"h-12 w-12 text-white transition-all"} css={({ ["textDecoration"] : "none", ["color"] : "var(--current-color)" })}/>
</RadixThemesText>
<RadixThemesBox className={"space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white"}>

<RadixThemesText as={"p"} className={"font-medium"} css={({ ["textDecoration"] : "none" })}>

{"Elevate your experience with smoother transitions and vibrant design. Perfect for prototyping and sharing ideas in style."}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox className={"pt-6 text-lg font-semibold leading-7"}>

<RadixThemesText as={"span"} className={"text-purple-500 transition-all duration-500 group-hover:text-white"} css={({ ["textDecoration"] : "none" })}>

{"Explore Documentation \u2192"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesBox className={"group relative cursor-pointer overflow-hidden bg-slate-300 rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"}>

<RadixThemesText as={"span"} className={"absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-slate-200 to-slate-700 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"} css={({ ["textDecoration"] : "none" })}>

{""}
</RadixThemesText>
<RadixThemesBox className={"relative z-10 mx-auto max-w-md"}>

<RadixThemesText as={"span"} className={"grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-slate-500 to-slate-700 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-slate-600 group-hover:to-slate-300"} css={({ ["textDecoration"] : "none" })}>

<LucidePaletteIcon className={"h-12 w-12 text-white transition-all"} css={({ ["textDecoration"] : "none", ["color"] : "var(--current-color)" })}/>
</RadixThemesText>
<RadixThemesBox className={"space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white"}>

<RadixThemesText as={"p"} className={"font-medium"} css={({ ["textDecoration"] : "none" })}>

{"Elevate your experience with smoother transitions and vibrant design. Perfect for prototyping and sharing ideas in style."}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox className={"pt-6 text-lg font-semibold leading-7"}>

<RadixThemesText as={"span"} className={"text-purple-500 transition-all duration-500 group-hover:text-white"} css={({ ["textDecoration"] : "none" })}>

{"Explore Documentation \u2192"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesGrid>
<RadixThemesFlex align={"center"} className={"rx-Stack p-4 sm:p-5 md:p-10 lg:p-20"} direction={"column"} gap={"3"}>

<RadixThemesFlex className={"rounded-lg bg-gray-200 p-4"}>

<Heading_9f394dfe6760a00687db451dc234e0ec/>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesFlex className={"p-4 sm:p-10 md:p-10"}>

<Heading_221859128d871ae3b07420c7483c8fb3/>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesBox className={"p-4 sm:p-10"} css={({ ["width"] : "100%", ["height"] : "100%", ["spacing"] : "3" })}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesGrid align={"center"} columns={({ ["xs"] : "1", ["sm"] : "2", ["md"] : "3", ["lg"] : "4" })} css={({ ["fontSize"] : "2em" })} id={"galeria"} ref={ref_galeria} gap={"7"}>

<RadixThemesCard className={"hover:shadow-2xl hover:shadow-gray-400 transition-shadow p-4"} css={({ ["spacing"] : "2" })}>

<Zoom>

<img className={"transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg"} src={"/Dragonite destruturato.jpg"}/>
</Zoom>
<RadixThemesBadge className={"bg-indigo-300 font-extrabold rounded-xl hover:bg-indigo-500 transition-colors"}>

<RadixThemesText as={"p"} className={"text-center text-indigo-900 p-2"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"bold"}>

{"Dragonite destruturato"}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesCard>
<RadixThemesCard className={"hover:shadow-2xl hover:shadow-gray-400 transition-shadow p-4"} css={({ ["spacing"] : "2" })}>

<Zoom>

<img className={"transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg"} src={"/Ballena ilustrativa.jpg"}/>
</Zoom>
<RadixThemesBadge className={"bg-indigo-300 font-extrabold rounded-xl hover:bg-indigo-500 transition-colors"}>

<RadixThemesText as={"p"} className={"text-center text-indigo-900 p-2"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"bold"}>

{"Ballena ilustrativa"}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesCard>
<RadixThemesCard className={"hover:shadow-2xl hover:shadow-gray-400 transition-shadow p-4"} css={({ ["spacing"] : "2" })}>

<Zoom>

<img className={"transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg"} src={"/Astronauta ilustrativo.jpg"}/>
</Zoom>
<RadixThemesBadge className={"bg-indigo-300 font-extrabold rounded-xl hover:bg-indigo-500 transition-colors"}>

<RadixThemesText as={"p"} className={"text-center text-indigo-900 p-2"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"bold"}>

{"Astronauta ilustrativo"}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesCard>
<RadixThemesCard className={"hover:shadow-2xl hover:shadow-gray-400 transition-shadow p-4"} css={({ ["spacing"] : "2" })}>

<Zoom>

<img className={"transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg"} src={"/Sunflower destruturato.jpg"}/>
</Zoom>
<RadixThemesBadge className={"bg-indigo-300 font-extrabold rounded-xl hover:bg-indigo-500 transition-colors"}>

<RadixThemesText as={"p"} className={"text-center text-indigo-900 p-2"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"bold"}>

{"Sunflower destruturato"}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesCard>
<RadixThemesCard className={"hover:shadow-2xl hover:shadow-gray-400 transition-shadow p-4"} css={({ ["spacing"] : "2" })}>

<Zoom>

<img className={"transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg"} src={"/Axolote ilustrativo.jpg"}/>
</Zoom>
<RadixThemesBadge className={"bg-indigo-300 font-extrabold rounded-xl hover:bg-indigo-500 transition-colors"}>

<RadixThemesText as={"p"} className={"text-center text-indigo-900 p-2"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"bold"}>

{"Axolote ilustrativo"}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesCard>
<RadixThemesCard className={"hover:shadow-2xl hover:shadow-gray-400 transition-shadow p-4"} css={({ ["spacing"] : "2" })}>

<Zoom>

<img className={"transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg"} src={"/Faro destruturato.jpg"}/>
</Zoom>
<RadixThemesBadge className={"bg-indigo-300 font-extrabold rounded-xl hover:bg-indigo-500 transition-colors"}>

<RadixThemesText as={"p"} className={"text-center text-indigo-900 p-2"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"bold"}>

{"Faro destruturato"}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesCard>
<RadixThemesCard className={"hover:shadow-2xl hover:shadow-gray-400 transition-shadow p-4"} css={({ ["spacing"] : "2" })}>

<Zoom>

<img className={"transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg"} src={"/Manta raya destruturato.jpg"}/>
</Zoom>
<RadixThemesBadge className={"bg-indigo-300 font-extrabold rounded-xl hover:bg-indigo-500 transition-colors"}>

<RadixThemesText as={"p"} className={"text-center text-indigo-900 p-2"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"bold"}>

{"Manta raya destruturato"}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesCard>
<RadixThemesCard className={"hover:shadow-2xl hover:shadow-gray-400 transition-shadow p-4"} css={({ ["spacing"] : "2" })}>

<Zoom>

<img className={"transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg"} src={"/Sun&moon ilustrativo.jpg"}/>
</Zoom>
<RadixThemesBadge className={"bg-indigo-300 font-extrabold rounded-xl hover:bg-indigo-500 transition-colors"}>

<RadixThemesText as={"p"} className={"text-center text-indigo-900 p-2"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"bold"}>

{"Sun&moon ilustrativo"}
</RadixThemesText>
</RadixThemesBadge>
</RadixThemesCard>
</RadixThemesGrid>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesSection className={"bg-gray-100"} size={"2"}>

<RadixThemesBox className={"gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"}>

<RadixThemesBox className={"font-light text-gray-500 sm:text-lg dark:text-gray-400"}>

<RadixThemesHeading className={"mb-4 text-4xl tracking-tight font-extrabold text-slate-500"}>

{"We didn't reinvent the wheel"}
</RadixThemesHeading>
<RadixThemesText as={"p"} className={"mb-4"} css={({ ["textDecoration"] : "none" })}>

{"We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })}>

{"We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick."}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox className={"grid grid-cols-2 gap-4 mt-8"}>

<img alt={"office content 1"} className={"w-full rounded-lg"} src={"/Fluidblack blackwork.jpg"}/>
<img alt={"office content 2"} className={"mt-4 w-full lg:mt-10 rounded-lg"} src={"/Foto vanner.jpg"}/>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesSection>
<RadixThemesFlex className={"fixed bottom-0 right-0 p-5"}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesTooltip className={"cursor-pointer"} content={"\u00a1Cont\u00e1ctame por WhatsApp!"}>

<RadixThemesLink asChild={true} className={"rounded-full shadow-lg shadow-green-500/50"} css={({ ["textDecoration"] : "none", ["backgroundColor"] : "#25D366", ["color"] : "white", ["padding"] : "10px 10px", ["cursor"] : "pointer", ["button"] : true, ["newTab"] : true, ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"https://wa.me/525522675044"} passHref={true}>

<div className={"rx-Html hover:animate-ping"} dangerouslySetInnerHTML={({ ["__html"] : "<svg class='w-6 h-6 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'><path fill='currentColor' fill-rule='evenodd' d='M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z' clip-rule='evenodd'/><path fill='currentColor' d='M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z'/></svg>" })}/>
</NextLink>
</RadixThemesLink>
</RadixThemesTooltip>
</RadixThemesFlex>
</RadixThemesFlex>
<div className={"rx-Html"} dangerouslySetInnerHTML={({ ["__html"] : "\n                <div class=\"flex justify-center items-center min-h-screen bg-gray-100 p-4\">\n                    <div class=\"w-full max-w-4xl\">\n                        <div class=\"calendly-inline-widget w-full rounded-lg\" \n                            data-url=\"https://calendly.com/j-castillomora01/cotizacion\" \n                            style=\"min-width:700px;height:700px;\"></div>\n                    </div>\n                </div>\n                <script type=\"text/javascript\" src=\"https://assets.calendly.com/assets/external/widget.js\" async></script>\n        " })}/>
<footer className={"bg-gradient-to-r from-slate-500 to-slate-200 p-20 "} css={({ ["width"] : "100%", ["align"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"2"}>

<RadixThemesFlex className={"justify-around"} css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "row" }), ["width"] : "100%" })} gap={"2"}>

<RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "row" }) })} gap={"2"}>

<img className={"w-48 h-48 rounded-lg"} src={"/Foto vanner.jpg"}/>
<RadixThemesButton className={"relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"}>

<RadixThemesText as={"span"} className={"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9c775d_0%,#ed6f15_50%,#adc965_100%)]"} css={({ ["textDecoration"] : "none" })}>

{""}
</RadixThemesText>
<RadixThemesText as={"p"} className={"font-bold inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-500 px-7 font-medium text-white backdrop-blur-3xl gap-2 undefined"} css={({ ["textDecoration"] : "none", ["fontFamily"] : "Outfit", ["--default-font-family"] : "Outfit" })} size={"4"}>

{"El Tipo Tattooer"}
</RadixThemesText>
</RadixThemesButton>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["textAlign"] : "start" }), ["flexDirection"] : "column" })} gap={"2"}>

<RadixThemesHeading as={"h3"} size={"4"} weight={"bold"}>

{"PRODUCTS"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"3"}>

{"Web Design"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"3"}>

{"Web Development"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"3"}>

{"E-commerce"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"3"}>

{"Content Management"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"3"}>

{"Mobile Apps"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["textAlign"] : "start" }), ["flexDirection"] : "column" })} gap={"2"}>

<RadixThemesHeading as={"h3"} size={"4"} weight={"bold"}>

{"RESOURCES"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"3"}>

{"Blog"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"3"}>

{"Case Studies"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"3"}>

{"Whitepapers"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"3"}>

{"Webinars"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"3"}>

{"E-books"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesSeparator size={"4"}/>
<RadixThemesFlex align={"center"} css={({ ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "row" }) })} direction={"row"} gap={"4"}>

<RadixThemesFlex align={"center"} css={({ ["@media screen and (min-width: 0)"] : ({ ["justifyContent"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["justifyContent"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["justifyContent"] : "center" }), ["width"] : "100%" })} gap={"9"}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"https://www.instagram.com/tipo.tattooer/"} passHref={true}>

<RadixThemesButton className={"relative w-12 h-12 rounded-full group bg-gradient-to-tr from-yellow-500 to-pink-700"}>

<RadixThemesBox className={"floater w-full h-full absolute top-0 left-0 bg-slate-500 rounded-full duration-300 group-hover:-top-8"}>

{""}
</RadixThemesBox>
<RadixThemesBox className={"icon relative z-10 w-full h-full flex items-center justify-centerrounded-full"}>

<LucideInstagramIcon className={"w-6 h-6 duration-300"} css={({ ["textDecoration"] : "none", ["color"] : "white" })}/>
</RadixThemesBox>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"https://www.facebook.com/tipotattooerArt"} passHref={true}>

<RadixThemesButton className={"relative w-12 h-12 rounded-full group bg-blue-500"}>

<RadixThemesBox className={"floater w-full h-full absolute top-0 left-0 bg-slate-500 rounded-full duration-300 group-hover:-top-8"}>

{""}
</RadixThemesBox>
<RadixThemesBox className={"icon relative z-10 w-full h-full flex items-center justify-centerrounded-full"}>

<LucideFacebookIcon className={"w-6 h-6 duration-300"} css={({ ["textDecoration"] : "none", ["color"] : "white" })}/>
</RadixThemesBox>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesText as={"p"} className={"text-center"} css={({ ["textDecoration"] : "none", ["whiteSpace"] : "nowrap" })} size={"3"} weight={"medium"}>

{"\u00a9 2024 Tipo Tattooer, Inc"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</footer>
</RadixThemesFlex>
<NextHead>

<title>

{"Tipotattoer | Index"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
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

export function Link_485741baf05dcc3a75961be8c3408828 () {
  
  const reflex___state____state__tipo_tattoer___backend___backend____state = useContext(StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state)





  
  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} className={"text-slate-500"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"medium"}>

{reflex___state____state__tipo_tattoer___backend___backend____state.current_texts["nav1"]}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_247fe42032eac05b9c354ab5b3a30913 () {
  
  const reflex___state____state__tipo_tattoer___backend___backend____state = useContext(StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state)





  
  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#collections"} passHref={true}>

<RadixThemesText as={"p"} className={"text-slate-500"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"medium"}>

{reflex___state____state__tipo_tattoer___backend___backend____state.current_texts["nav4"]}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  )
}

export function Heading_9f394dfe6760a00687db451dc234e0ec () {
  
  const reflex___state____state__tipo_tattoer___backend___backend____state = useContext(StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state)





  
  return (
    <RadixThemesHeading align={"center"} className={"text-slate-500 font-semibold text-xl sm:text-2xl md:text-3xl p-5 sm:p-8 md:p-10"}>

{reflex___state____state__tipo_tattoer___backend___backend____state.current_texts["header"]}
</RadixThemesHeading>
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

export function Switch_80ab02ff86cd9ac80bc7e2e457b31131 () {
  
  const reflex___state____state__tipo_tattoer___backend___backend____state = useContext(StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_3585a6109a42717c9958b602d6bfbc40 = useCallback(((_ev_0) => (addEvents([(Event("reflex___state____state.tipo_tattoer___backend___backend____state.toggle_language", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesSwitch checked={reflex___state____state__tipo_tattoer___backend___backend____state.show_english} color={"blue"} onCheckedChange={on_change_3585a6109a42717c9958b602d6bfbc40} size={"2"}/>
  )
}

export function Link_724686c06324770adce2b3a770e5ff82 () {
  
  const reflex___state____state__tipo_tattoer___backend___backend____state = useContext(StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state)





  
  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#galeria"} passHref={true}>

<RadixThemesText as={"p"} className={"text-slate-500"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"medium"}>

{reflex___state____state__tipo_tattoer___backend___backend____state.current_texts["nav3"]}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
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

export function Heading_221859128d871ae3b07420c7483c8fb3 () {
  
  const reflex___state____state__tipo_tattoer___backend___backend____state = useContext(StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state)





  
  return (
    <RadixThemesHeading align={"center"} className={"font-extrabold text-slate-500 animate-flip-down text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-5 md:p-8"} css={({ ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })} highContrast={true}>

{reflex___state____state__tipo_tattoer___backend___backend____state.current_texts["subtitle"]}
</RadixThemesHeading>
  )
}

export function Link_6696505112d16f7dcdc929581c8f2e7b () {
  
  const reflex___state____state__tipo_tattoer___backend___backend____state = useContext(StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state)





  
  return (
    <RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesText as={"p"} className={"text-slate-500"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"medium"}>

{reflex___state____state__tipo_tattoer___backend___backend____state.current_texts["nav3"]}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  )
}

export function Text_30bfa07aac7c712d6830ac81b3b39ee0 () {
  
  const reflex___state____state__tipo_tattoer___backend___backend____state = useContext(StateContexts.reflex___state____state__tipo_tattoer___backend___backend____state)





  
  return (
    <RadixThemesText as={"p"} css={({ ["textDecoration"] : "none" })} size={"4"} weight={"medium"}>

{reflex___state____state__tipo_tattoer___backend___backend____state.current_texts["nav2"]}
</RadixThemesText>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_62e1be9f4056e2a67ee12d35546f931e/>
  )
}
