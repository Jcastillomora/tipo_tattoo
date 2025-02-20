import reflex as rx
from .backend.backend import State

def form_field(
    label: str, placeholder: str, type: str, name: str
) -> rx.Component:
    return rx.form.field(
        rx.flex(
            rx.form.label(label),
            rx.form.control(
                rx.input(
                    placeholder=placeholder, type=type
                ),
                as_child=True,
            ),
            direction="column",
            spacing="1",
        ),
        name=name,
        width="100%",
    )


def event_form() -> rx.Component:
    return rx.card(
        rx.flex(
            rx.hstack(
                rx.badge(
                    rx.icon(tag="calendar-plus", size=32),
                    color_scheme="mint",
                    radius="full",
                    padding="0.65rem",
                ),
                rx.vstack(
                    rx.heading(
                        State.current_texts["form_header"],
                        size="4",
                        weight="bold",
                        class_name="text-center",
                    ),
                    rx.text(
                        State.current_texts["form_text"],
                        size="2",
                    ),
                    spacing="1",
                    height="100%",
                    align_items="start",
                ),
                height="100%",
                spacing="4",
                align_items="center",
                width="100%",
            ),
            rx.form.root(
                rx.flex(
                    rx.flex(
                        form_field(
                            "Name", "Nombre", "text", "name"
                        ),
                        form_field(
                            "Last Name", "Apellido", "text", "last_name"
                        ),
                        spacing="6",
                        flex_direction="row",
                    ),
                    rx.flex(
                        form_field(
                            "Email", "Email", "email", "email"
                        ),
                        form_field(
                            "Phone", "Teléfono", "tel", "phonwe"
                        ),
                        spacing="6",
                        flex_direction="row",
                    ),
                    rx.flex(
                        form_field(
                            "Area ", "Lugar", "text", "area"
                        ),
                        form_field(
                            "Date", "Fecha", "date", "event_date"
                        ),
                        spacing="6",
                        flex_direction="row",
                    ),
                    form_field(
                        "Details",
                        "Detalles",
                        "text",
                        "details",
                    ),
                    direction="column",
                    spacing="2",
                ),
                rx.form.submit(
                    rx.button("Enviar", variant="soft", radius="large", color_scheme="gold"),
                    as_child=True,
                    width="100%",
                ),
                on_submit=lambda form_data: rx.window_alert(
                    form_data.to_string()
                ),
                reset_on_submit=False,
            ),
            width="100%",
            direction="column",
            spacing="4",
        ),
        size="3",
        width="100%",
        align="center",
        class_name="bg-slate-600 shadow-lg items-center",
    )