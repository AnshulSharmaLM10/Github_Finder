import {useState} from 'react';

const options = [
    { key: '1', text: 'light' },
    { key: '2', text: 'dark' },
    { key: '3', text: 'cupcake' },
    { key: '4', text: 'bumblebee' },
    { key: '5', text: 'corporate' },
    { key: '6', text: 'synthwave' },
    { key: '7', text: 'retro' },
    { key: '8', text: 'cyberpunk' },
    { key: '9', text: 'valentine' },
    { key: '10', text: 'halloween' },
    { key: '11', text: 'forest' },
    { key: '12', text: 'aqua' },
    { key: '13', text: 'black' },
    { key: '14', text: 'dracula' },
    { key: '15', text: 'lemonade' },
    { key: '16', text: 'night' },
    { key: '17', text: 'coffee' },
    { key: '18', text: 'winter' },
    { key: '19', text: 'acid' },
    { key: '20', text: 'fantasy' },
    { key: '21', text: 'cmyk' }
  ]

function ThemeUI () {
    const [theme, setTheme] = useState('dark')

    const handleThemeChange = (text) => {
        document.documentElement.setAttribute("data-theme", text);
        setTheme(text)
    }

    return (
        
        <div className="dropdown dropdown-end">
            <div tabindex="0" class="btn gap-1 normal-case btn-ghost">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg> 
                <span class="hidden md:inline">Theme</span> 
                <svg width="12px" height="12px" class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
            </div>
            <div tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box max-h-96 h-[70vh] w-52 mt-4 overflow-y-auto">
            {options && options.map(o => {
                if(theme === o.text) {
                    return (<div className="btn btn-secondary rounded-none" key={o.key} value={o.text} onClick={() => handleThemeChange(o.text)}>{o.text}</div>)
                } else {
                    return (<div className="btn rounded-none" key={o.key} value={o.text} onClick={() => handleThemeChange(o.text)}>{o.text}</div>)
                }
            }
            )}
            </div>
        </div>
    )
}

export default ThemeUI