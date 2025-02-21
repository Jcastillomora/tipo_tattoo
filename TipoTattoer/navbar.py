import reflex as rx
from .backend.backend import State

def language_switch():
    return rx.badge(
        rx.text("Spa", size="1", class_name="text-slate-500"),
        rx.switch(
            on_change=State.toggle_language, 
            checked=State.show_english,
            size="2",
            color_scheme="blue"
        ),
        rx.text("En", size="1", class_name="text-slate-500"),
        color="white",
        variant="outline",
        radius="full",
        color_scheme="indigo",
        size="2",
        high_contrast=True,
    )

def navbar_link(text: str, url: str) -> rx.Component:
    return rx.link(
        rx.text(text, size="4", weight="medium", class_name="text-slate-500"), href=url
    )

def navbar_dropdown() -> rx.Component:
    return rx.flex(
        rx.desktop_only(
            rx.hstack(
                rx.hstack(
                    # rx.image(
                    #     src="/logo.jpg",
                    #     width="2.25em",
                    #     height="auto",
                    #     border_radius="25%",
                    # ),
                    # rx.icon("pen-tool"),
                    # rx.heading(
                    #     "Tipo Tattooer", size="7", weight="bold"
                    # ),
                    # align_items="center",
                    # color="#ffffff",
                    rx.box(
                        rx.text(
                                    "",
                                    class_name="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9c775d_0%,#ed6f15_50%,#adc965_100%)]",
                                    as_="span",
                                ),
                        rx.text("Tipo Tattooer", class_name="font-bold inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-500 p-5 font-medium text-white backdrop-blur-3xl gap-2 undefined"),
                        weight="bold",
                        class_name=(
                            "text-white animate-pulse animate-duration-500"
                            # Tamaños de texto responsivos
                            "text-lg sm:text-xl md:text-xl lg:text-2xl "
                            "relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                        )
                    ),
                ),
                rx.hstack(
                    navbar_link(State.current_texts["nav1"], "/#"),
                    rx.menu.root(
                        rx.menu.trigger(
                            rx.button(
                                rx.text(
                                    State.current_texts["nav2"],
                                    size="4",
                                    weight="medium",
                                ),
                                rx.icon("chevron-down"),
                                weight="medium",
                                variant="ghost",
                                size="3",
                                class_name="text-slate-500",
                            ),
                        ),
                        rx.menu.content(
                            rx.menu.item("Service 1"),
                            rx.menu.item("Service 2"),
                            rx.menu.item("Service 3"),
                            class_name="bg-slate-200 text-slate-500",
                        ),
                        color="#ffffff",
                    ),
                    navbar_link(State.current_texts["nav3"], "/#galeria"),
                    navbar_link(State.current_texts["nav4"], "/#collections"),
                    language_switch(),
                    justify="end",
                    spacing="5",
                ),
                justify="between",
                align_items="center",
            ),
            width="100%",
            spacinf="0",
        ),
        rx.mobile_and_tablet(
            rx.hstack(
                rx.hstack(
                    # rx.image(
                    #     src="/logo.jpg",
                    #     width="2em",
                    #     height="auto",
                    #     border_radius="25%",
                    # ),
                    # rx.icon("pen-tool"),
                    # rx.heading(
                    #     "Tipo Tattooer", size="5", weight="bold"
                    # ),
                    # align_items="center",
                    # color="#ffffff",
                    rx.box(
                        rx.text(
                                    "",
                                    class_name="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9c775d_0%,#ed6f15_50%,#adc965_100%)]",
                                    as_="span",
                                ),
                        rx.text("Tipo Tattooer", class_name="p-10 font-bold inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-500 px-7 py-7 font-medium text-white backdrop-blur-3xl gap-2 undefined"),
                        weight="bold",
                        class_name=(
                            "text-white animate-pulse animate-duration-500"
                            # Tamaños de texto responsivos
                            "text-lg sm:text-2xl md:text-2xl lg:text-3xl "
                            "relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                        )
                    ),
                ),
                rx.menu.root(
                    rx.menu.trigger(
                        rx.icon("menu", size=30),
                    ),
                    rx.menu.content(
                        # rx.menu.item("Home"),
                        navbar_link(State.current_texts["nav1"], "/#"),
                        rx.menu.sub(
                            rx.menu.sub_trigger("Services"),
                            rx.menu.sub_content(
                                rx.menu.item("Service 1"),
                                rx.menu.item("Service 2"),
                                rx.menu.item("Service 3"),
                            ),
                        ),
                        navbar_link(State.current_texts["nav3"], "/#"),
                    ),
                    language_switch(),
                    justify="end",
                    class_name="bg-gradient-to-r from-slate-500 to-slate-200",
                ),
                justify="between",
                align_items="center",
                color="#ffffff",
            ),
        ),
        # position="fixed",
        # top="0px",
        # z_index="5",
        width="100%",
        spacing="0",
        # class_name="px-10 py-10",
        # background="url('/bg_nav2.png')",
        class_name="bg-gradient-to-r from-slate-500 to-slate-200 px-10 py-10",
    )