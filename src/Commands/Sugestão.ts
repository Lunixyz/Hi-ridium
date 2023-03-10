import { Command } from "../Utils/command";
import { TextInput } from "../Constructors/Modal";
export = {
  data: {
    name: "sugestão",
    description: "► Enviar sugestão...",
    type: "ACTION_ROW",
    options: [
      {
        name: "servidor",
        description: "...para o servidor",
        type: "SUB_COMMAND",
      },
    ],
  },
  async execute(client, interaction) {
    const modal = new TextInput("sugestão", "Sugestão").insertInputs(
      ["SuggestionInput1", "SuggestionInput2"],
      [
        `Qual é a ideia, ${interaction.user.username}?`,
        `Conte me mais, ${interaction.user.username}!`,
      ],
      ["SHORT", "PARAGRAPH"],
      [24, 68],
      [150, 250],
      [true, true],
      [
        "Mais cupcakes no chat geral.",
        "Se os administradores conseguissem bancar uma festa...",
      ]
    );
    await interaction.showModal(modal);
  },
} as Command;
