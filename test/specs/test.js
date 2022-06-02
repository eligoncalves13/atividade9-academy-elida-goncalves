describe("Teste da aplicação API Demos", () => {
    afterEach(() => {
        driver.reset();
    })

    // it("Deve ser possível abrir o app API Demos", async () => {
    //     const visibilidadeTituloPrincipal = await $('android=new UiSelector().text("API Demos").className("android.widget.TextView")').isDisplayed();
    //     expect(visibilidadeTituloPrincipal).toBe(true);
    // });

    // App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE
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
        await $("id=android:id/button1").click();
        // await $('android=new UiSelector().text("OK").className("android.widget.Button")').click();
        const visibilidadeTituloAlertDialogs = await $('android=new UiSelector().text("App/AlertDialogs").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeTituloAlertDialogs).toBe(true);
    });

    // // it("Deve ser possível fechar o alerta do fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE selecionando CANCEL", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //     await $("id=two_buttons").click();
    //     // await $("id=button2").click();
    //     await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').click();
    //     const visibilidadeTituloAlertDialogs = await $('android=new UiSelector().text("App/AlertDialogs").className("android.widget.TextView")').isDisplayed();
    //     expect(visibilidadeTituloAlertDialogs).toBe(true);
    // // });

    // it("Deve ser possível fechar o alerta do fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE selecionando fora do modal", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    //     await $("id=two_buttons").click();
    // });

    // // App/Alert Dialogs/LIST DIALOG
    // it("Deve ser possível abrir o modal do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        // await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    // });

    // it("Deve ser possível abrir o Command one do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        // await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    // });

    // it("Deve ser possível abrir o Command two do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        // await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    // });

    // it("Deve ser possível abrir o Command three do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        // await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    // });

    // it("Deve ser possível abrir o Command four do fluxo App/Alert Dialogs/LIST DIALOG", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    // });

     // it("Deve ser possível fechar o alerta do fluxo App/Alert Dialogs/LIST DIALOG selecionando fora do modal", async () => {
    //     await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
    //     await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
    // });



    // // App/Fragment/Hide and Show
    // it("Deve ser possível abrir o fluxo App/Fragment/Hide and Show", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
    // });

    // it("Deve ser possível esconder o fragment do fluxo App/Fragment/Hide and Show", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
    // });

    // it("Deve ser possível mostrar o fragment do fluxo App/Fragment/Hide and Show", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
    // });

    // it("Deve ser possível escrever no fragment do fluxo App/Fragment/Hide and Show", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
    // });

    // it("Deve ser possível esconder o TextView do fluxo App/Fragment/Hide and Show", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
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
        // });

    // it("Deve ser possível ativar DISPLAY_HOME_AS_UP do fluxo App/Action Bar/Display options", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Display options").className("android.widget.TextView")').click();
    // });

    // // App/Action Bar/Display options, DISPLAY_SHOW_TITLE
    // it("Deve ser possível ativar DISPLAY_SHOW_TITLE do fluxo App/Action Bar/Display options", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Display options").className("android.widget.TextView")').click();
    // });

    // // App/Action Bar/Display options, DISPLAY_SHOW_CUSTOM
    // it("Deve ser possível ativar DISPLAY_SHOW_CUSTOM do fluxo App/Action Bar/Display options", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Display options").className("android.widget.TextView")').click();
    // });

    // // App/Action Bar/Display options, DISPLAY_SHOW_NAVIGATION
    // it("Deve ser possível ativar DISPLAY_SHOW_NAVIGATION do fluxo App/Action Bar/Display options", async () => {
        //await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        //await $('android=new UiSelector().text("Display options").className("android.widget.TextView")').click();
    // });
});