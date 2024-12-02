       const cores = [
            "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", 
            "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue",
            "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki",
            "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
            "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray",
            "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold",
            "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
            "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
            "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",
            "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon",
            "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue",
            "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose",
            "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid",
            "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink",
            "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon",
            "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow",
            "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White",
            "WhiteSmoke", "Yellow", "YellowGreen"
        ];

        // escolhe 10 cores do array
        function escolherCorAleatoria(colors, count) {
            const embaralhar = [...colors].sort(() => 0.5 - Math.random());
            return embaralhar.slice(0, count);
        }

        // escolhe a cor selecionada
        const coresJogo = escolherCorAleatoria(cores, 10);
        const corEscolhida = coresJogo[Math.floor(Math.random() * coresJogo.length)];

        // funcao que verifica se esta antes ou dps da ordem alfabetica
        function mostrarDica(guess, target) {
            return guess.toLowerCase() > target.toLowerCase()
                ? "A cor correta vem ANTES na ordem alfabética."
                : "A cor correta vem DEPOIS na ordem alfabética.";
        }

        // funcao que lida com a selecao da cor no html
        function gerenciarEscolha(color) {
            const mensagemDIV = document.getElementById('message');
            
            if (color === corEscolhida) {
                mensagemDIV.textContent = "Parabéns! Você acertou a cor!";
                mensagemDIV.className = "success";
                document.body.style.backgroundColor = color;
            } else {
                const hint = mostrarDica(color, corEscolhida);
                mensagemDIV.textContent = `Tente novamente! ${hint}`;
                mensagemDIV.className = "error";
            }
        }

        // cria os botoes que o usuario clica para adivinhar
        const corOpcao = document.getElementById('colorOptions');
        coresJogo.forEach(color => {
            const  botao = document.createElement('button');
            botao.textContent = color;
            botao.className = 'color-button';
            botao.onclick = () => gerenciarEscolha(color);
            colorOptions.appendChild(botao);
        });