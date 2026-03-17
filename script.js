<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mroczny Album</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Ekran wejściowy -->
<div id="entry-screen">
    <div class="entry-content">
        <h1>Wejście na stronę albumu</h1>
        <p>Akceptujesz mroczne doświadczenie?</p>
        <button id="enter-btn">Akceptuję</button>
    </div>
</div>

<!-- Główna strona -->
<div id="main-content">
    <header>
        <h1>Mroczny Album</h1>
        <nav>
            <button class="tab-btn" data-tab="about">O płycie</button>
            <button class="tab-btn" data-tab="buy">Kup teraz</button>
        </nav>
    </header>

    <section id="about" class="tab">
        <h2>O płycie</h2>
        <p>Ten album łączy rock i nu-metal w mroczną podróż dźwięków. Każde oko patrzy na coś, co ukryte...</p>
    </section>

    <section id="buy" class="tab">
        <h2>Kup teraz</h2>
        <p>Opcja zakupu (można rozbudować pod PayPal/Stripe w przyszłości).</p>
        <button onclick="alert('Funkcja zakupu nie jest jeszcze aktywna')">Kup płytę</button>
    </section>
</div>

<!-- Wbudowany JS -->
<script>
document.addEventListener("DOMContentLoaded", () => {
    const entryScreen = document.getElementById('entry-screen');
    const mainContent = document.getElementById('main-content');
    const enterBtn = document.getElementById('enter-btn');

    // Przycisk akceptacji
    enterBtn.addEventListener('click', () => {
        entryScreen.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // Zakładki
    const tabs = document.querySelectorAll('.tab');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            tabs.forEach(tab => tab.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });

    // Pokazujemy domyślnie pierwszą zakładkę
    document.getElementById('about').classList.add('active');
});
</script>

</body>
</html>
