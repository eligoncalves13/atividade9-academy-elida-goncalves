describe("Teste da aplicação API Demos", () => {
    afterEach(() => {
        driver.reset();
    })

    // it("Deve ser possível abrir o app API Demos", async () => {
    //     const visibilidadeTituloPrincipal = await $('android=new UiSelector().text("API Demos").className("android.widget.TextView")').isDisplayed();
    //     expect(visibilidadeTituloPrincipal).toBe(true);
    // });

    // App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE
    // it("Deve ser possível abrir o alerta do fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //     await $("id=two_buttons").click();
    //     const visibilidadeTituloAlerta = await $("id=android:id/alertTitle").isDisplayed();
    //     expect(visibilidadeTituloAlerta).toBe(true);
    // });

    // it("Deve ser possível fechar o alerta do fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE selecionando OK", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //     await $("id=two_buttons").click();
    //     await $('android=new UiSelector().text("OK").className("android.widget.Button")').click();
    //     const visibilidadeTituloAlerta = await $("id=android:id/alertTitle").isDisplayed();
    //     expect(visibilidadeTituloAlerta).toBe(false);
    // });

    //  it("Deve ser possível fechar o alerta do fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE selecionando CANCEL", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //     await $("id=two_buttons").click();
    //     await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').click();
    //     const visibilidadeTituloAlerta = await $("id=android:id/alertTitle").isDisplayed();
    //     expect(visibilidadeTituloAlerta).toBe(false);
    //  });

    // it("Deve ser possível fechar o alerta do fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE selecionando fora do modal", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //     await $("id=two_buttons").click();
    //     clicar fora 
    //     const visibilidadeAlerta = await $('').isDisplayed();
    //     expect(visibilidadeAlerta).toBe(false);
    // });


    // // App/Alert Dialogs/LIST DIALOG
    // it("Deve ser possível abrir o modal do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //     await $("id=select_button").click();
    //     const visibilidadeTitulo = await $("id=android:id/alertTitle").isDisplayed();
    //     expect(visibilidadeTitulo).toBe(true);
    //     const textoTitulo = await $("id=android:id/alertTitle").getText();
    //     expect(textoTitulo).toBe("Header title");
    // });

    // it("Deve ser possível abrir o Command one do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //     await $("id=select_button").click();
    //     await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').click();
    //     const visibilidadeMensagem = await $("id=android:id/message").isDisplayed();
    //     expect(visibilidadeMensagem).toBe(true);
    //     const textoMensagem = await $("id=android:id/message").getText();
    //     expect(textoMensagem).toBe("You selected: 0 , Command one");
    //     });

    // it("Deve ser possível abrir o Command two do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //     await $("id=select_button").click();
    //     await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').click();
    //     const visibilidadeMensagem = await $("id=android:id/message").isDisplayed();
    //     expect(visibilidadeMensagem).toBe(true);
    //     const textoMensagem = await $("id=android:id/message").getText();
    //     expect(textoMensagem).toBe("You selected: 1 , Command two");
    // });

    // it("Deve ser possível abrir o Command three do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //     await $("id=select_button").click();
    //     await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').click();
    //     const visibilidadeMensagem = await $("id=android:id/message").isDisplayed();
    //     expect(visibilidadeMensagem).toBe(true);
    //     const textoMensagem = await $("id=android:id/message").getText();
    //     expect(textoMensagem).toBe("You selected: 2 , Command three");
    // });

    // it("Deve ser possível abrir o Command four do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //     await $("id=select_button").click();
    //     await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').click();
    //     const visibilidadeMensagem = await $("id=android:id/message").isDisplayed();
    //     expect(visibilidadeMensagem).toBe(true);
    //     const textoMensagem = await $("id=android:id/message").getText();
    //     expect(textoMensagem).toBe("You selected: 3 , Command four");
    // });

    //  it("Deve ser possível fechar o alerta do fluxo App/Alert Dialogs/LIST DIALOG selecionando fora do modal", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //        clicar fora do modal 
    //     const visibilidadeAlerta = await $('').isDisplayed();
    //     expect(visibilidadeAlerta).toBe(false);
    // });

    // // App/Fragment/Hide and Show
    // it("Deve ser possível abrir o fluxo App/Fragment/Hide and Show", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
    //     const visibilidadeTitulo = await $('android=new UiSelector().text("App/Fragment/Hide and Show").className("android.widget.TextView")').isDisplayed();
    //     expect(visibilidadeTitulo).toBe(true);

    // });

    // it("Deve ser possível esconder o fragment do fluxo App/Fragment/Hide and Show", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
    //     await $("id=io.appium.android.apis:id/frag1hide").click();
    //     const visibilidadeFragment = await $("id=id/fragment1").isDisplayed();
    //     expect(visibilidadeFragment).toBe(false);
    // });

    it("Deve ser possível mostrar o fragment do fluxo App/Fragment/Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        // await $("id=io.appium.android.apis:id/frag1hide").click();
        // await $("id=io.appium.android.apis:id/frag1hide").click();
        const visibilidadeFragment = await $("id=io.appium.android.apis:id/fragment1").isDisplayed();
        expect(visibilidadeFragment).toBe(true);
    });

    // it("Deve ser possível escrever no fragment do fluxo App/Fragment/Hide and Show", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
    // });

    // it("Deve ser possível esconder o TextView do fluxo App/Fragment/Hide and Show", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
    //     await $("id=io.appium.android.apis:id/frag2hide").click();
    //     const visibilidadeFragment = await $("id=id/fragment2").isDisplayed();
    //     expect(visibilidadeFragment).toBe(false);
    // });

    // it("Deve ser possível mostrar o TextView do fluxo App/Fragment/Hide and Show", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
    // });

    // it("Deve ser possível escrever no TextView do fluxo App/Fragment/Hide and Show", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
    // });



    // // App/Action Bar/Display options, DISPLAY_HOME_AS_UP
    // it("Deve ser possível abrir o fluxo App/Action Bar/Display options", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Display options").className("android.widget.TextView")').click();
        // const visibilidadeTitulo = await $('android=new UiSelector().text("").className("android.widget.TextView")').isDisplayed();
        // expect(visibilidadeTitulo).toBe(true);
    // });

    // it("Deve ser possível ativar DISPLAY_HOME_AS_UP do fluxo App/Action Bar/Display options", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Display options").className("android.widget.TextView")').click();
        //pegar toggle pelo id
        //await $('id=toggle_home_as_up').click();
        //pegar pelo texto/class
        //await $(android=new UiSelector().text("DISPLAY_HOME_AS_UP").className("android.widget.Button").click();
        //PROVAVAELMENTE TERA QUE PEGAR O BOTÃO VOLTAR PELO XPATH
    // });

    // // App/Action Bar/Display options, DISPLAY_SHOW_TITLE
    // it("Deve ser possível ativar DISPLAY_SHOW_TITLE do fluxo App/Action Bar/Display options", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Display options").className("android.widget.TextView")').click();
        //pegar toggle pelo id
        //await $('id=toggle_show_title').click();
        //pegar pelo texto/class
        //await $(android=new UiSelector().text("DISPLAY_SHOW_TITLE").className("android.widget.Button").click();
    // });

    // // App/Action Bar/Display options, DISPLAY_SHOW_CUSTOM
    // it("Deve ser possível ativar DISPLAY_SHOW_CUSTOM do fluxo App/Action Bar/Display options", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Display options").className("android.widget.TextView")').click();
        //pegar toggle pelo id
        //await $('id=toggle_show_custom').click();
        //pegar pelo texto/class
        //await $(android=new UiSelector().text("DISPLAY_SHOW_CUSTOM").className("android.widget.Button").click();
    // });

    // // App/Action Bar/Display options, DISPLAY_SHOW_NAVIGATION
    // it("Deve ser possível ativar DISPLAY_SHOW_NAVIGATION do fluxo App/Action Bar/Display options", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Display options").className("android.widget.TextView")').click();
        //pegar toggle pelo id
        //await $('id=toggle_show_navigation').click();
        //pegar pelo texto/class
        //await $(android=new UiSelector().text("DISPLAY_SHOW_NAVIGATION").className("android.widget.Button").click();
    // });
});