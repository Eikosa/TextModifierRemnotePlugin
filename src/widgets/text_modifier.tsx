import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

function SelectedTextDictionary() {
  const plugin = usePlugin();

  const selText = useTracker(async (reactivePlugin) => {
    const selRichText = await reactivePlugin.editor.getSelectedRichText();
    return await plugin.richText.toString(selRichText || []);
  });

  //let rem_id;
  //async () => {
  //  rem_id = await plugin.focus.getFocusedRemId();
  //}
  const rem_id = useTracker(async () => {
    return await plugin.focus.getFocusedRemId();
  });  

  return <div>
  <button
    onClick={
      async () => {
        let rem = await plugin.rem.findOne(rem_id);
        //alert(JSON.stringify(rem))
        //alert(rem.text)
        let text = rem?.text.toString().replace(selText, selText?.toLocaleLowerCase())
        await rem?.setText([text])
      }
    }
    >
  to lower
  </button>
  <button
    onClick={
      async () => {
        let rem = await plugin.rem.findOne(rem_id);
        //alert(JSON.stringify(rem))
        //alert(rem.text)
        let text = rem?.text.toString().replace(selText, selText?.toLocaleUpperCase())
        await rem?.setText([text])
      }
    }
    >
  TO UPPER
  </button>
  <button
    onClick={
      async () => {
        let rem = await plugin.rem.findOne(rem_id);
        //alert(JSON.stringify(rem))
        //alert(rem.text)
        //let words = rem?.text.toString().toLocaleLowerCase().split(" ");
        let words = selText.toLocaleLowerCase().split(" ");

        words = words?.map((word) => {
          if (word.length > 0) {
          return word[0].toLocaleUpperCase() + word.substring(1); 
          }
        }).join(" ");
        let text = rem?.text.toString().replace(selText, words)
        await rem?.setText([text])
      }
    }
    >
  Capitalize First Letter Of Every Word
  </button>
  <button
    onClick={
      async () => {
        let rem = await plugin.rem.findOne(rem_id);
        //alert(JSON.stringify(rem))
        //alert(rem.text)
        let words = selText.toString(); 
        words = words[0].toLocaleUpperCase() + words.substring(1).toLocaleLowerCase(); 
        
        let text = rem?.text.toString().replace(selText, words)

        await rem?.setText([text])
      }
    }
    >
  Capitalize only first letter
  </button>
</div>;

  
}

renderWidget(SelectedTextDictionary);