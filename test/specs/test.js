describe("Teste da aplicação API Demos", () => {
    afterEach(() => {
        driver.reset();
    })

    it("Deve ser possível abrir o app API Demos", async () => {
        const visibilidadeTituloPrincipal = await $('android=new UiSelector().text("API Demos").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeTituloPrincipal).toBe(true);
    });

    it("Deve ser possível abrir o alerta do fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=two_buttons").click();
        const visibilidadeTituloAlerta = await $("id=android:id/alertTitle").isDisplayed();
        expect(visibilidadeTituloAlerta).toBe(true);
    });

    it("Deve ser possível fechar o alerta do fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE selecionando OK", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=two_buttons").click();
        await $('android=new UiSelector().text("OK").className("android.widget.Button")').click();
        const visibilidadeTituloAlerta = await $("id=android:id/alertTitle").isDisplayed();
        expect(visibilidadeTituloAlerta).toBe(false);
    });

    it("Deve ser possível fechar o alerta do fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE selecionando CANCEL", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=two_buttons").click();
        await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').click();
        const visibilidadeTituloAlerta = await $("id=android:id/alertTitle").isDisplayed();
        expect(visibilidadeTituloAlerta).toBe(false);
    });

    it("Deve ser possível abrir o modal do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        const visibilidadeTitulo = await $("id=android:id/alertTitle").isDisplayed();
        expect(visibilidadeTitulo).toBe(true);
        const textoTitulo = await $("id=android:id/alertTitle").getText();
        expect(textoTitulo).toBe("Header title");
    });

    it("Deve ser possível abrir o Command one do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').click();
        const visibilidadeMensagem = await $("id=android:id/message").isDisplayed();
        expect(visibilidadeMensagem).toBe(true);
        const textoMensagem = await $("id=android:id/message").getText();
        expect(textoMensagem).toBe("You selected: 0 , Command one");
        });

    it("Deve ser possível abrir o Command two do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').click();
        const visibilidadeMensagem = await $("id=android:id/message").isDisplayed();
        expect(visibilidadeMensagem).toBe(true);
        const textoMensagem = await $("id=android:id/message").getText();
        expect(textoMensagem).toBe("You selected: 1 , Command two");
    });

    it("Deve ser possível abrir o Command three do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').click();
        const visibilidadeMensagem = await $("id=android:id/message").isDisplayed();
        expect(visibilidadeMensagem).toBe(true);
        const textoMensagem = await $("id=android:id/message").getText();
        expect(textoMensagem).toBe("You selected: 2 , Command three");
    });

    it("Deve ser possível abrir o Command four do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').click();
        const visibilidadeMensagem = await $("id=android:id/message").isDisplayed();
        expect(visibilidadeMensagem).toBe(true);
        const textoMensagem = await $("id=android:id/message").getText();
        expect(textoMensagem).toBe("You selected: 3 , Command four");
    });

    it("Deve ser possível abrir o fluxo App/Fragment/Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        const visibilidadeTitulo = await $('android=new UiSelector().text("App/Fragment/Hide and Show").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeTitulo).toBe(true);

    });

    it("Deve ser possível esconder o fragment do fluxo App/Fragment/Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        await $("id=frag1hide").click();
        const visibilidadeFragment = await $("id=fragment1").isDisplayed();
        expect(visibilidadeFragment).toBe(false);
    });

    it("Deve ser possível mostrar o fragment do fluxo App/Fragment/Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        await $("id=frag1hide").click();
        await $("id=frag1hide").click();
        const visibilidadeFragment = await $("id=fragment1").isDisplayed();
        expect(visibilidadeFragment).toBe(true);
    });

    it("Deve ser possível esconder o TextView do fluxo App/Fragment/Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        await $("id=frag2hide").click();
        const visibilidadeFragment = await $("id=fragment2").isDisplayed();
        expect(visibilidadeFragment).toBe(false);
    });

    it("Deve ser possível mostrar o TextView do fluxo App/Fragment/Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        await $("id=frag2hide").click();
        await $("id=frag2hide").click();
        const visibilidadeFragment = await $("id=fragment2").isDisplayed();
        expect(visibilidadeFragment).toBe(true);
    });

    it("Deve ser possível abrir o fluxo App/Action Bar/Display options", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        const visibilidadeTitulo = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
         expect(visibilidadeTitulo).toBe(true);
    });

    it("Deve ser possível ativar DISPLAY_HOME_AS_UP do fluxo App/Action Bar/Display options", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('id=toggle_home_as_up').click();
        const visibilidadeBotaoVoltar = await $('//android.widget.ImageButton[@content-desc="Navigate up"]').isDisplayed();
        expect(visibilidadeBotaoVoltar).toBe(true);    
    });

    it("Deve ser possível ativar DISPLAY_SHOW_TITLE do fluxo App/Action Bar/Display options", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('id=toggle_show_title').click();
        const visibilidadeTitulo = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeTitulo).toBe(false);

    });

    it("Deve ser possível ativar DISPLAY_SHOW_CUSTOM do fluxo App/Action Bar/Display options", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('id=toggle_show_custom').click();
        const visibilidadeBotaoCustom = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed();
        expect(visibilidadeBotaoCustom).toBe(true);     
    });

    it("Deve ser possível ativar DISPLAY_SHOW_NAVIGATION do fluxo App/Action Bar/Display options", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('id=toggle_navigation').click();
        const visibilidadeTextOpcao1 = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeTextOpcao1).toBe(true);
        const visibilidadeTextOpcao2 = await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeTextOpcao2).toBe(true);
        const visibilidadeTextOpcao3 = await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeTextOpcao3).toBe(true);
    });
});