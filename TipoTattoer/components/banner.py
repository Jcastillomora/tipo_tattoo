import reflex as rx

def banner_home() -> rx.Component:
    return rx.flex(
        rx.box(
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
                    "text-3xl sm:text-4xl md:text-5xl lg:text-5xl "
                    "relative inline-flex h-24 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                )
            ),
            class_name="w-full h-full flex text-left items-center p-10",
        ),
        # Ajuste de imagen de fondo
        background_image="url('/tipo_banner.JPG')",
        background_size="cover",
        background_position="center",
        background_repeat="no-repeat",
        # Altura responsiva: por ejemplo, 64 en móviles, 96 en tablets, screen completo en desktop
        class_name="w-full h-64 sm:h-96 md:h-screen",
    )