import reflex as rx

from .backend.backend import State
from .navbar import navbar_dropdown
from .galery import galery
from .forms import event_form
from .components.whatsapp import whatsapp
from .components.footer import footer
from .components.banner import banner_home
from .components.card import uiverse_card, uiverse_hover_card
from .components.collection import collections_section



# def action_button(
#     icon: str,
#     label: str,
#     on_click: callable,
#     color_scheme: LiteralAccentColor,
# ) -> rx.Component:
#     return rx.button(
#         rx.icon(icon, size=16),
#         label,
#         variant="soft",
#         size="2",
#         on_click=on_click,
#         color_scheme=color_scheme,
#         cursor="pointer",
#     )


# def selected_item_chip(item: str) -> rx.Component:
#     return rx.badge(
#         item,
#         rx.icon("circle-x", size=18),
#         color_scheme="green",
#         **chip_props,
#         on_click=State.remove_selected(item),
#     )


# def unselected_item_chip(item: str) -> rx.Component:
#     return rx.cond(
#         State.selected_items.contains(item),
#         rx.fragment(),
#         rx.badge(
#             item,
#             rx.icon("circle-plus", size=18),
#             color_scheme="gray",
#             **chip_props,
#             on_click=State.add_selected(item),
#         ),
#     )


def items_selector() -> rx.Component:
    return rx.vstack(
        rx.flex(
            rx.hstack(
                rx.icon("lightbulb", size=20),
                rx.heading(
                    "Tatto Style"
                    + f" ({State.selected_items.length()})",
                    size="4",
                ),
                spacing="1",
                align="center",
                width="100%",
                # justify_content=["end", "start"],
            ),
            rx.hstack(
                action_button(
                    "plus",
                    "Add All",
                    State.add_all_selected,
                    "green",
                ),
                action_button(
                    "trash",
                    "Clear All",
                    State.clear_selected,
                    "tomato",
                ),
                action_button(
                    "shuffle",
                    "",
                    State.random_selected,
                    "gray",
                ),
                spacing="2",
                justify="end",
                width="100%",
            ),
            justify="between",
            flex_direction=["column", "row"],
            align="center",
            spacing="2",
            margin_bottom="10px",
            width="100%",
        ),
        # Selected Items
        rx.flex(
            rx.foreach(
                State.selected_items,
                selected_item_chip,
            ),
            wrap="wrap",
            spacing="2",
            justify_content="start",
        ),
        rx.divider(),
        # Unselected Items
        rx.flex(
            rx.foreach(skills, unselected_item_chip),
            wrap="wrap",
            spacing="2",
            justify_content="start",
        ),
        justify_content="center",
        align_items="center",
        width="100%",
    )


@rx.page(route="/agenda")
def agenda():
    return rx.flex(
        event_form(),
        width="100%",
        spacing="3",
        align="center",
    )



def index() -> rx.Component:
    return rx.vstack(
        navbar_dropdown(),
        banner_home(),
        # rx.vstack(
        #     rx.heading("Ejemplo Twilio + Reflex"),
        #     rx.text("Ingresa tu número con formato internacional (e.g., +34612345678):"),
        #     rx.input(
        #         # El valor del input está ligado a State.phone_number
        #         on_blur=State.set_phone_number, 
        #         placeholder="+34123456789", 
        #         size="2",
        #         border_color="blue.300"
        #     ),
        #     rx.button(
        #         "Enviar mensaje",
        #         color_scheme="blue",
        #         on_click=State.send_whatsapp_message
        #     ),
        #     rx.text(State.status_message, color="green.600"),
        #     spacing="3"
        # ), 
        rx.desktop_only(
        rx.flex(
            rx.image("/revista3.jpg"),
        ),
        ),
        collections_section(),
        rx.grid(
            uiverse_hover_card(),
            uiverse_hover_card(),
            uiverse_hover_card(),
            width="100%",
            spacing="1",
            class_name="p-4",
            columns=rx.breakpoints({"xs": "1", "sm": "2", "md": "3", "lg": "3"}),
        ),
        rx.vstack(
            rx.flex(
                rx.heading(
                    State.current_texts["header"],
                    align="center",
                    class_name=(
                        "text-slate-500 font-semibold "
                        # Usa un tamaño base y luego aumenta
                        "text-xl sm:text-2xl md:text-3xl "
                        # Padding base y luego mayor en breakpoints grandes
                        "p-5 sm:p-8 md:p-10"
                    ),
                ),
                class_name="rounded-lg bg-gray-200 p-4",
            ),
            rx.spacer(),
            rx.flex(
                rx.heading(
                    State.current_texts["subtitle"],
                    high_contrast=True,
                    align="center",
                    font_family="Roboto",
                    class_name=(
                        "font-extrabold text-slate-500 animate-flip-down "
                        # Text base 3xl, luego va subiendo
                        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl "
                        # Padding base 5, sube un poco en md
                        "p-5 md:p-8"
                    ),
                ),
                # En lugar de p-20, usa responsive
                class_name="p-4 sm:p-10 md:p-10",
            ),
            # En lugar de p-40, hazlo responsivo:
            align="center",
            class_name="p-4 sm:p-5 md:p-10 lg:p-20",
        ),
        rx.box(
            galery(),
            width="100%",
            height="100%",
            spacing="3",
            class_name="p-4 sm:p-10",  # Ajusta según tu preferencia
        ),
        marketing_section(),
        # rx.box(
        #     rx.box(
        #         mercadopago_wallet(preference_id=preference_id),
        #         class_name="p-8",
        #     ),
        # ),

        # rx.flex(
        #     event_form(),
        #     spacing="3",
        #     # En móviles ocupa todo el ancho (w-full),
        #     # luego en pantallas medias o grandes w-1/2
        #     class_name="p-4 sm:p-10 w-full md:w-1/2",
        # ),
        rx.flex(
            whatsapp(),
            class_name="fixed bottom-0 right-0 p-5",
        ),
        rx.html("""
                <div class="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                    <div class="w-full max-w-4xl">
                        <div class="calendly-inline-widget w-full rounded-lg" 
                            data-url="https://calendly.com/j-castillomora01/cotizacion" 
                            style="min-width:700px;height:700px;"></div>
                    </div>
                </div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        """),
        # rx.html("""
        #         <!-- Calendly badge widget begin -->
        #         <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        #         <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        #         <script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/j-castillomora01/cotizacion', text: 'Get a Tattoo Quote', color: '#0069ff', textColor: '#ffffff' }); }</script>
        #         <!-- Calendly badge widget end -->
        # """),
        footer(),
        spacing="0",
        width="100%",
        height="100%",
        padding="0",
        align="center",
        class_name="bg-gray-100",
    )



def marketing_section() -> rx.Component:
    return rx.section(
        rx.box(
            # Contenedor izquierdo: texto
            rx.box(
                rx.heading(
                    "We didn't reinvent the wheel",
                    class_name="mb-4 text-4xl tracking-tight font-extrabold text-slate-500",
                ),
                rx.text(
                    "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.",
                    class_name="mb-4",
                ),
                rx.text(
                    "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.",
                ),
                class_name="font-light text-gray-500 sm:text-lg dark:text-gray-400",
            ),
            # Contenedor derecho: imágenes
            rx.box(
                rx.image(
                    # src="/Foto vanner.jpg",
                    src="/Fluidblack blackwork.jpg",
                    alt="office content 1",
                    class_name="w-full rounded-lg",
                ),
                rx.image(
                    src="/Foto vanner.jpg",
                    # src="/Fluidblack blackwork.jpg",
                    alt="office content 2",
                    class_name="mt-4 w-full lg:mt-10 rounded-lg",
                ),
                class_name="grid grid-cols-2 gap-4 mt-8",
            ),
            class_name="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6",
        ),
        class_name="bg-gray-100",
    )


base_style = {
    rx.text: {
        "text_decoration": "none",
    },
    rx.link: {
        "text_decoration": "none",
    },
    rx.icon: {
        "text_decoration": "none",
    },
}

app = rx.App(
    style=base_style,
    theme=rx.theme(
        has_background_color=True,
        accent_color="gray",
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100..900&family=Outfit:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    ],
    )
)
app.add_page(index)


