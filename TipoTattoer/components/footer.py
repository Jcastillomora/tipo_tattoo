import reflex as rx

def footer_item(text: str, href: str) -> rx.Component:
    return rx.link(rx.text(text, size="3"), href=href)


def footer_items_1() -> rx.Component:
    return rx.flex(
        rx.heading(
            "PRODUCTS", size="4", weight="bold", as_="h3"
        ),
        footer_item("Web Design", "/#"),
        footer_item("Web Development", "/#"),
        footer_item("E-commerce", "/#"),
        footer_item("Content Management", "/#"),
        footer_item("Mobile Apps", "/#"),
        spacing="2",
        text_align=["center", "center", "start"],
        flex_direction="column",
    )


def footer_items_2() -> rx.Component:
    return rx.flex(
        rx.heading(
            "RESOURCES", size="4", weight="bold", as_="h3"
        ),
        footer_item("Blog", "/#"),
        footer_item("Case Studies", "/#"),
        footer_item("Whitepapers", "/#"),
        footer_item("Webinars", "/#"),
        footer_item("E-books", "/#"),
        spacing="2",
        text_align=["center", "center", "start"],
        flex_direction="column",
    )


def social_link(icon: str, href: str) -> rx.Component:
    return rx.link(rx.icon(icon), href=href)


def socials() -> rx.Component:
    return rx.flex(
        # social_link("instagram", "https://www.instagram.com/tipo.tattooer/"),
        rx.link(
            rx.button(
                # Elemento "floater" que se anima en hover.
                rx.box(
                    "",
                    class_name=(
                        "floater w-full h-full absolute top-0 left-0 bg-slate-500 "
                        "rounded-full duration-300 group-hover:-top-8"
                    ),
                ),
                # Contenedor del icono.
                rx.box(
                    rx.icon("instagram", class_name="w-6 h-6 duration-300", color="white"),
                    class_name=(
                        "icon relative z-10 w-full h-full flex items-center justify-center"
                        "rounded-full"
                    ),
                ),
                class_name="relative w-12 h-12 rounded-full group bg-gradient-to-tr from-yellow-500 to-pink-700",
                
            ),
            href="https://www.instagram.com/tipo.tattooer/",
        ),
        rx.link(
            rx.button(
                # Elemento "floater" que se anima en hover.
                rx.box(
                    "",
                    class_name=(
                        "floater w-full h-full absolute top-0 left-0 bg-slate-500 "
                        "rounded-full duration-300 group-hover:-top-8"
                    ),
                ),
                # Contenedor del icono.
                rx.box(
                    rx.icon("facebook", class_name="w-6 h-6 duration-300", color="white"),
                    class_name=(
                        "icon relative z-10 w-full h-full flex items-center justify-center"
                        "rounded-full"
                    ),
                ),
                class_name="relative w-12 h-12 rounded-full group bg-blue-500",
                
            ),
            href="https://www.facebook.com/tipotattooerArt",
        ),
        # social_link("twitter", "/#"),
        # social_link("facebook", "https://www.facebook.com/tipotattooerArt"),
        # social_link("linkedin", "/#"),
        spacing="9",
        align="center",
        justify_content=[
                        "center",
                        "center",
                        "center",
                    ],
        width="100%",
    )


def footer() -> rx.Component:
    return rx.el.footer(
        rx.vstack(
            rx.flex(
                # rx.vstack(
                #     rx.hstack(
                #         # rx.image(
                #         #     src="/logo.jpg",
                #         #     width="2.25em",
                #         #     height="auto",
                #         #     border_radius="25%",
                #         # ),
                #         rx.icon("pen-tool"),
                #         rx.heading(
                #             "Tipo Tattooer",
                #             size="7",
                #             weight="bold",
                #         ),
                #         align_items="center",
                #     ),
                #     spacing="4",
                #     align_items=[
                #         "center",
                #         "center",
                #         "start",
                #     ],
                # ),
                rx.flex(
                    rx.image(
                        src="/Foto vanner.jpg",
                        class_name="w-48 h-48 rounded-lg",
                    ),
                    rx.button(
                        rx.text(
                            "",
                            class_name="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9c775d_0%,#ed6f15_50%,#adc965_100%)]",
                            as_="span",
                        ),
                        rx.text("El Tipo Tattooer", size="4", font_family="Outfit", class_name="font-bold inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-500 px-7 font-medium text-white backdrop-blur-3xl gap-2 undefined"),
                        # color_scheme="indigo",
                        class_name="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none",
                    ),
                    spacing="2",
                    flex_direction=["column", "column", "row"],    
                ),
                footer_items_1(),
                footer_items_2(),
                # justify="around",
                spacing="2",
                flex_direction=["column", "column", "row"],
                width="100%",
                class_name="justify-around",
            ),
            rx.divider(),
            rx.flex(
                rx.hstack(
                    socials(),
                    rx.text(
                        "© 2024 Tipo Tattooer, Inc",
                        size="3",
                        white_space="nowrap",
                        weight="medium",
                        class_name="text-center",
                    ),
                    spacing="4",
                    # justify="center",
                    # # align="center",
                    width="100%",
                    flex_direction=["column", "column", "row"],
                    # class_name="px-20",
                ),
                align="center",
                width="100%",
            ),
            spacing="2",
            width="100%",
        ),
        width="100%",
        align="center",
        # padding_x=["1.5em", "1.5em", "3em", "5em"],
        # padding_y=["1.25em", "1.25em", "2em"],
        class_name="bg-gradient-to-r from-slate-500 to-slate-200 p-20 ",
    )