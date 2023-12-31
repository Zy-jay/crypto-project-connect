export const NATIVE_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"


function getEtherscanTokenImageLink(name) {
  return `https://etherscan.io/token/images/${name}.png`;
}

function getEthplorerTokenImageLink(name) {
  return `https://ethplorer.io/images/${name}.png`;
}

export const SUPORTED_CHAIN_ID = [
  {
    name: "ARBITRUM",
    id: 42161,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 64.8 73" xml:space="preserve" aria-label="Arbitrum"  ><style>.arbitrum_svg__st0{fill:#2e384c}</style><path class="arbitrum_svg__st0" d="m20.8 61.5-.9 1.7 12 6.9 31.6-17.8-1-32.1-11.3-6.8-19.3 30.9z"></path><path d="M.2 40.6c0 3.5 0 7-.1 10.5 0 1.6.5 3 1.4 4.2.4.6.9 1.1 1.5 1.4 1.5.8 2.9 1.7 4.4 2.6 1.9 1.1 3.9 2.3 5.8 3.4l5.6 3.2 28.9-46.2-27.7-.6L.2 40.6z" style="fill: rgb(255, 255, 255),"></path><path class="arbitrum_svg__st0" d="m20.8 61.5-.5.6.5 1 2-1.4"></path><path class="arbitrum_svg__st0" d="M20.7 61.8c0-.1.1-.2.1-.3C28.6 48.3 36.3 35.2 44.1 22c.1-.2.2-.3.3-.5-.1-.1-.2-.1-.4-.1h-9.7c-.4 0-.6.2-.7.5-5 8.2-9.9 16.4-14.9 24.5-2.8 4.6-5.6 9.2-8.4 13.9-.1.1-.1.2-.2.3s-.2.2-.3.1c-.8-.5-1.7-1-2.6-1.5C15.1 46.6 22.9 34 30.7 21.4c-.1 0-.1-.1-.1-.1-1.6 0-3.1-.2-4.6-.1-1.8.1-3.6.4-5.2 1.2-1.2.6-2.1 1.4-2.8 2.5C13.7 31.6 9.3 38.3 5 45c-.1.1-.2.3-.3.4V21.8c0-1 .4-1.8 1.3-2.3 4.8-2.8 9.6-5.5 14.4-8.3C24 9.1 27.7 7 31.3 4.9c.8-.5 1.6-.5 2.5 0 8.4 4.9 16.9 9.7 25.3 14.5.9.5 1.4 1.3 1.4 2.4v24.7c-.2-.1-.3-.4-.4-.6-2.1-3.2-4.1-6.4-6.2-9.6-2.2-3.4-4.3-6.7-6.5-10.1-.4-.6-.8-1.3-1.3-2-.1.1-.1.1-.1.2-1.7 2.8-3.3 5.7-5 8.5-.2.3-.1.5 0 .7.9 1.4 1.7 2.8 2.6 4.2 2.9 4.7 5.8 9.3 8.6 14 .8 1.3 1.6 2.6 2.4 3.8-.3.3-.6.4-.9.6-.5.3-1.1.7-1.7.9-1.3-2-2.6-4.1-3.8-6.1-3-4.7-6-9.5-9-14.2-.1-.1-.1-.3-.3-.3-.1 0-.1.1-.2.2-1.9 3.2-3.8 6.5-5.7 9.7-.2.3-.1.5 0 .8 1.9 3 3.8 6 5.8 9 1.3 2.1 2.6 4.2 4 6.3l-.1.1c-3 1.7-6 3.5-9 5.2-.7.4-1.4.3-2.1-.1-3-1.7-6-3.4-8.9-5.1-.8-.1-1.3-.5-2-.8z"></path><path d="M52 57.3c.6-.2 1.1-.6 1.7-.9.3-.2.7-.3.9-.6.1 0 .3-.1.4-.2 1.4-.8 2.9-1.7 4.3-2.5.7-.4 1-1.1 1.1-1.8V21.8c0-1.1-.4-1.8-1.4-2.4-8.4-4.8-16.9-9.7-25.3-14.5-.8-.5-1.6-.5-2.5 0-3.6 2.1-7.3 4.2-10.9 6.3-4.8 2.8-9.6 5.6-14.4 8.3-.9.5-1.3 1.2-1.3 2.3v23.6c0 .2-.1.3-.2.4-1.3 2-2.7 4.1-4 6.1-.1.1-.1.3-.3.3-.1-.2-.1-.4-.1-.6v-30c0-2 .7-3.7 2.1-5 .4-.4 1-.8 1.5-1.1 3.6-2.1 7.2-4.2 10.8-6.2l7.8-4.5c2.3-1.4 4.6-2.8 7-4 2.2-1.2 4.4-1.1 6.6.2 2.1 1.2 4.2 2.4 6.4 3.7 2 1.2 4 2.3 6 3.5 1.8 1 3.6 2.1 5.4 3.1s3.7 2.1 5.5 3.2c.8.4 1.6.9 2.3 1.4 1.9 1.2 3 2.8 3.3 5 .1.6.1 1.1.1 1.7v28.5c0 1.6-.4 3-1.4 4.3-.5.6-1 1.1-1.7 1.5-1.9 1.1-3.9 2.2-5.8 3.4-1.7 1-3.5 2-5.2 3l-5.1 3c-1.9 1.1-3.9 2.3-5.8 3.4-1.5.8-2.9 1.7-4.4 2.6-.6.4-1.3.6-2 .6-1.5.1-3-.1-4.4-.9-3-1.8-6.1-3.5-9.1-5.2-.4-.2-.8-.5-1.3-.7-.4-.2-.4-.2-.2-.7.5-.9 1-1.7 1.5-2.6.2-.3.2-.6.5-.8.7.3 1.2.7 1.8 1 3 1.7 6 3.4 8.9 5.1.7.4 1.4.5 2.1.1 3-1.7 6-3.5 9-5.2l.1-.1c.1 0 .1 0 .2-.1 2.7-1.5 5.4-3.1 8-4.7.8-.3 1.2-.4 1.5-.8z" style="fill: rgb(150, 190, 220),"></path><path d="M60.4 46.6v4.8c0 .8-.3 1.4-1.1 1.8-1.5.8-2.9 1.7-4.3 2.5-.1.1-.3.1-.4.2-.8-1.3-1.6-2.6-2.4-3.8-2.9-4.7-5.8-9.3-8.6-14-.9-1.4-1.7-2.8-2.6-4.2-.2-.3-.2-.5 0-.7 1.7-2.8 3.4-5.7 5-8.5 0 0 .1-.1.1-.2.5.7.9 1.3 1.3 2 2.2 3.3 4.3 6.7 6.5 10.1 2.1 3.2 4.1 6.4 6.2 9.6 0 0 .1.3.3.4zM52 57.3c-.3.3-.7.5-1 .7-2.7 1.6-5.3 3.1-8 4.7-.1 0-.1 0-.2.1-1.3-2.1-2.6-4.2-4-6.3-1.9-3-3.8-6-5.8-9-.2-.3-.2-.5 0-.8 1.9-3.2 3.8-6.5 5.7-9.7 0-.1.1-.2.2-.2.2 0 .2.2.3.3 3 4.7 6 9.5 9 14.2 1.2 2 2.5 4 3.8 6z" style="fill: rgb(40, 160, 239),"></path></svg>`,
  },
  {
    name: "AURORA",
    id: 1313161554,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" xml:space="preserve" aria-label="Aurora"  ><path fill="#78d64b" d="M15 2.292a3.317 3.317 0 0 1 2.981 1.841l9.375 18.75a3.333 3.333 0 0 1-2.981 4.825H5.625a3.333 3.333 0 0 1-2.98-4.825l9.374-18.75A3.317 3.317 0 0 1 15 2.292M15 0a5.625 5.625 0 0 0-5.031 3.108L.594 21.858A5.625 5.625 0 0 0 5.625 30h18.75a5.625 5.625 0 0 0 5.03-8.142l-9.374-18.75A5.625 5.625 0 0 0 15 0z"></path></svg>`,
  },
  {
    name: "AVALANCHE",
    id: 43114,
    svg: `<svg viewBox="0 0 1503 1504" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Avalanche" ><path fill="#fff" d="M287 258h928v844H287z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1502.5 752c0 414.77-336.23 751-751 751-414.766 0-751-336.23-751-751C.5 337.234 336.734 1 751.5 1c414.77 0 751 336.234 751 751Zm-963.812 298.86H392.94c-30.626 0-45.754 0-54.978-5.9-9.963-6.46-16.051-17.16-16.789-28.97-.554-10.88 7.011-24.168 22.139-50.735l359.87-634.32c15.313-26.936 23.061-40.404 32.839-45.385 10.516-5.35 23.062-5.35 33.578 0 9.778 4.981 17.527 18.449 32.839 45.385l73.982 129.144.377.659c16.539 28.897 24.926 43.551 28.588 58.931a109.562 109.562 0 0 1 0 51.289c-3.69 15.497-11.992 30.257-28.781 59.591L687.573 964.702l-.489.856c-16.648 29.135-25.085 43.902-36.778 55.042-12.73 12.18-28.043 21.03-44.832 26.02-15.313 4.24-32.47 4.24-66.786 4.24Zm368.062 0h208.84c30.81 0 46.31 0 55.54-6.08 9.96-6.46 16.23-17.35 16.79-29.15.53-10.53-6.87-23.3-21.37-48.323-.5-.852-1-1.719-1.51-2.601L1060.43 785.75l-1.19-2.015c-14.7-24.858-22.12-37.411-31.65-42.263a36.734 36.734 0 0 0-33.391 0c-9.594 4.981-17.342 18.08-32.655 44.462L857.306 964.891l-.357.616c-15.259 26.34-22.885 39.503-22.335 50.303.738 11.81 6.826 22.69 16.788 29.15 9.041 5.9 24.538 5.9 55.348 5.9Z" fill="#E84142"></path></svg>`,
  },
  {
    name: "CELO",
    id: 42220,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950 950" xml:space="preserve" aria-label="Celo"  ><path d="M375 850c151.9 0 275-123.1 275-275S526.9 300 375 300 100 423.1 100 575s123.1 275 275 275zm0 100C167.9 950 0 782.1 0 575s167.9-375 375-375 375 167.9 375 375-167.9 375-375 375z" style="fill: rgb(251, 204, 92),"></path><path d="M575 650c151.9 0 275-123.1 275-275S726.9 100 575 100 300 223.1 300 375s123.1 275 275 275zm0 100c-207.1 0-375-167.9-375-375S367.9 0 575 0s375 167.9 375 375-167.9 375-375 375z" style="fill: rgb(53, 208, 127),"></path><path d="M587.4 750c26-31.5 44.6-68.4 54.5-108.1 39.6-9.9 76.5-28.5 108.1-54.5-1.4 45.9-11.3 91.1-29.2 133.5-42.3 17.8-87.5 27.7-133.4 29.1zM308.1 308.1c-39.6 9.9-76.5 28.5-108.1 54.5 1.4-45.9 11.3-91.1 29.2-133.4 42.3-17.8 87.6-27.7 133.4-29.2-26 31.5-44.6 68.4-54.5 108.1z" style="fill: rgb(94, 163, 59),"></path></svg>`,
  },
  {
    name: "ETHEREUM",
    id: 1,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Ethereum"  ><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#627EEA"></circle><g fill="#FFF" fill-rule="nonzero"><path fill-opacity="0.602" d="M16.498 4v8.87l7.497 3.35z"></path><path d="M16.498 4 9 16.22l7.498-3.35z"></path><path fill-opacity="0.602" d="M16.498 21.968v6.027L24 17.616z"></path><path d="M16.498 27.995v-6.028L9 17.616z"></path><path fill-opacity="0.2" d="m16.498 20.573 7.497-4.353-7.497-3.348z"></path><path fill-opacity="0.602" d="m9 16.22 7.498 4.353v-7.701z"></path></g></g></svg>`,
  },
  {
    name: "FANTOM",
    id: 250,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Fantom"  ><defs><style>.fantom_svg__cls-1{fill:#fff,fill-rule:evenodd}</style><mask id="fantom_svg__mask" x="10" y="6" width="93.1" height="20" maskUnits="userSpaceOnUse"><path class="fantom_svg__cls-1" d="M10 6h93.1v20H10Z" id="fantom_svg__a"></path></mask></defs><g id="fantom_svg__Layer_2" data-name="Layer 2"><g id="fantom_svg__Layer_1-2" data-name="Layer 1"><circle cx="16" cy="16" r="16" style="fill: rgb(19, 181, 236),"></circle><path class="fantom_svg__cls-1" d="m17.2 12.9 3.6-2.1V15Zm3.6 9L16 24.7l-4.8-2.8V17l4.8 2.8 4.8-2.8Zm-9.6-11.1 3.6 2.1-3.6 2.1Zm5.4 3.1 3.6 2.1-3.6 2.1Zm-1.2 4.2L11.8 16l3.6-2.1Zm4.8-8.3L16 12.2l-4.2-2.4L16 7.3ZM10 9.4v13.1l6 3.4 6-3.4V9.4L16 6Z" style="mask: url(&quot,#fantom_svg__mask&quot,),"></path></g></g></svg>`,
  },
  {
    name: "KAVA",
    id: 2222,
    svg: `<svg id="kava_svg__Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 2000 2210" xml:space="preserve" aria-label="Kava"  ><style>.kava_svg__st2{fill:#ff564f}</style><path d="M198.5 1841.3 321.6 2210l845-1105L321.6 0 192.5 360.7l561.3 744.1-555.3 736.5z" style="opacity: 0.2, fill: rgb(255, 86, 79),"></path><path d="M1999.7 2209.8h-401l-845.2-1105L1598.7 0h401l-833.3 1104.8 833.3 1105z" style="fill: rgb(240, 129, 121),"></path><path class="kava_svg__st2" d="M0 0h321.4v2209.8H0V0z"></path><path id="kava_svg___x30_" class="kava_svg__st2" d="M2000 2209.8h-401l-845.2-1105L1599 0h401l-833.3 1104.8 833.3 1105z"></path><path id="kava_svg___x30__1_" class="kava_svg__st2" d="M2000 2209.8h-401l-845.2-1105L1599 0h401l-833.3 1104.8 833.3 1105z"></path><path id="kava_svg___x30__2_" class="kava_svg__st2" d="M2000 2209.8h-401l-845.2-1105L1599 0h401l-833.3 1104.8 833.3 1105z"></path><path id="kava_svg___x30__3_" class="kava_svg__st2" d="M2000 2209.8h-401l-845.2-1105L1599 0h401l-833.3 1104.8 833.3 1105z"></path></svg>`,
  },
  {
    name: "GNOSIS",
    id: 100,
    svg: `<svg id="gnosis_svg__Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 256 255.8" xml:space="preserve" aria-label="Gnosis"  ><style>.gnosis_svg__st1{fill-rule:evenodd,clip-rule:evenodd,fill:#fff}</style><g id="gnosis_svg__Page-1"><g id="gnosis_svg__Artboard"><g id="gnosis_svg__Group-6"><path id="gnosis_svg__Fill-1" d="M128 0c70.6 0 128 57.3 128 127.9s-57.4 127.9-128 127.9S0 198.5 0 127.9 57.4 0 128 0z" style="fill-rule: evenodd, clip-rule: evenodd, fill: rgb(72, 169, 166),"></path><path id="gnosis_svg__Fill-2" class="gnosis_svg__st1" d="M62.3 88.6h52.6V62.3H62.3z"></path><path id="gnosis_svg__Fill-3" class="gnosis_svg__st1" d="M141.1 88.6h52.6V62.3h-52.6z"></path><path id="gnosis_svg__Fill-4" class="gnosis_svg__st1" d="M193.7 141.1h-26.3v26.3h-26.3v26.3h52.6z"></path><path id="gnosis_svg__Fill-5" class="gnosis_svg__st1" d="M114.9 193.7v-26.3H88.6v-26.3H62.3v52.6z"></path></g></g></g></svg>`,
  },
  {
    name: "MOONBEAM",
    id: 1284,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="Moonbeam"  ><path fill="none" d="M0 0h200v200H0z" data-name="Rectangle 37"></path><path fill="#53cbc8" d="M118.683 16a61.3 61.3 0 0 0-61.276 61.313v.228a3.016 3.016 0 0 0 3.017 2.845h116.517a3.015 3.015 0 0 0 3.016-2.845l.005-.1v-.128A61.3 61.3 0 0 0 118.683 16Z" data-name="Path 185"></path><path fill="#e1147b" d="M16.837 145.77a3.729 3.729 0 1 1-3.73-3.732 3.73 3.73 0 0 1 3.73 3.732Z" data-name="Path 186"></path><path fill="#e1147b" d="M172.888 125.126H47.865a3.677 3.677 0 0 0-3.231 5.423l.062.116a3.668 3.668 0 0 0 3.232 1.924h124.9a3.669 3.669 0 0 0 3.232-1.924l.062-.116a3.678 3.678 0 0 0-3.234-5.423Z" data-name="Path 187"></path><path fill="#e1147b" d="M189.5 91.3H47.862a3.681 3.681 0 0 0-3.666 3.887c0 .039 0 .078.006.117a3.665 3.665 0 0 0 3.667 3.459H189.5a3.666 3.666 0 0 0 3.667-3.459c0-.039 0-.078.006-.117A3.681 3.681 0 0 0 189.5 91.3Z" data-name="Path 188"></path><path fill="#e1147b" d="M136.171 175.864H72.338a3.675 3.675 0 0 0-1.638 6.964l.234.117a3.657 3.657 0 0 0 1.637.382h63.364a3.662 3.662 0 0 0 1.638-.382l.233-.117a3.675 3.675 0 0 0-1.635-6.964Z" data-name="Path 189"></path><path fill="#e1147b" d="M175.169 158.951h-63.831a3.676 3.676 0 0 0-1.637 6.964l.233.117a3.668 3.668 0 0 0 1.638.381h63.36a3.665 3.665 0 0 0 1.638-.381l.233-.117a3.676 3.676 0 0 0-1.634-6.964Z" data-name="Path 190"></path><path fill="#e1147b" d="m88.131 148.326-.108-.116a3.674 3.674 0 0 1 2.694-6.173h103.6a3.674 3.674 0 0 1 2.694 6.173l-.108.116a3.7 3.7 0 0 1-2.693 1.174H90.824a3.7 3.7 0 0 1-2.693-1.174Z" data-name="Path 191"></path><path fill="#e1147b" d="M26.427 142.038h49.472a3.676 3.676 0 0 1 1.637 6.964l-.233.117a3.657 3.657 0 0 1-1.637.382h-49a3.658 3.658 0 0 1-1.638-.382l-.233-.117a3.676 3.676 0 0 1 1.632-6.964Z" data-name="Path 192"></path><path fill="#e1147b" d="M38.272 95.031a3.729 3.729 0 1 1-3.73-3.731 3.73 3.73 0 0 1 3.73 3.731Z" data-name="Path 193"></path><path fill="#e1147b" d="m126.183 112.952.031-.116a3.672 3.672 0 0 0-3.549-4.622H19.049a3.671 3.671 0 0 0-3.549 4.622l.032.116a3.681 3.681 0 0 0 3.547 2.724h103.556a3.683 3.683 0 0 0 3.548-2.724" data-name="Path 194"></path><path fill="#e1147b" d="M9.457 111.944a3.729 3.729 0 1 1-3.729-3.731 3.731 3.731 0 0 1 3.729 3.731Z" data-name="Path 195"></path><path fill="#e1147b" d="M38.272 128.857a3.729 3.729 0 1 1-3.73-3.731 3.731 3.731 0 0 1 3.73 3.731Z" data-name="Path 196"></path><path fill="#e1147b" d="M101.748 162.683a3.729 3.729 0 1 1-3.73-3.731 3.73 3.73 0 0 1 3.73 3.731Z" data-name="Path 197"></path><path fill="#e1147b" d="M62.746 179.596a3.729 3.729 0 1 1-3.729-3.731 3.73 3.73 0 0 1 3.729 3.731Z" data-name="Path 198"></path></svg>`,
  },
  {
    name: "OPTIMISM",
    id: 10,
    svg: `<svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Optimism"  ><circle cx="250" cy="250" r="250" fill="#FF0420"></circle><path d="M177.133 316.446c-14.886 0-27.082-3.503-36.589-10.508-9.382-7.13-14.073-17.262-14.073-30.397 0-2.752.313-6.13.938-10.133 1.627-9.006 3.941-19.827 6.943-32.461 8.506-34.4 30.46-51.6 65.861-51.6 9.632 0 18.263 1.626 25.894 4.878 7.631 3.127 13.635 7.881 18.013 14.261 4.378 6.254 6.568 13.76 6.568 22.516 0 2.627-.313 5.942-.939 9.945-1.876 11.133-4.128 21.954-6.755 32.461-4.378 17.138-11.946 29.96-22.704 38.466-10.758 8.381-25.143 12.572-43.157 12.572Zm2.627-27.02c7.006 0 12.947-2.064 17.826-6.192 5.004-4.128 8.569-10.445 10.695-18.951 2.877-11.759 5.067-22.017 6.568-30.773.5-2.627.75-5.316.75-8.069 0-11.383-5.942-17.075-17.825-17.075-7.006 0-13.01 2.064-18.014 6.192-4.878 4.129-8.381 10.446-10.507 18.952-2.252 8.381-4.504 18.639-6.755 30.773-.501 2.501-.751 5.128-.751 7.88 0 11.509 6.005 17.263 18.013 17.263Zm79.543 25.144c-1.376 0-2.44-.438-3.19-1.314-.626-1.001-.813-2.126-.563-3.377l25.894-121.965c.25-1.376.938-2.502 2.064-3.378 1.126-.875 2.314-1.313 3.565-1.313h49.912c13.885 0 25.018 2.877 33.399 8.631 8.507 5.755 12.76 14.073 12.76 24.956 0 3.127-.375 6.38-1.126 9.757-3.127 14.386-9.444 25.019-18.951 31.899-9.382 6.88-22.267 10.32-38.654 10.32h-25.331l-8.631 41.093c-.251 1.376-.939 2.501-2.064 3.377-1.126.876-2.315 1.314-3.565 1.314h-25.519Zm66.424-71.678c5.253 0 9.819-1.439 13.697-4.316 4.003-2.877 6.63-7.005 7.881-12.384.375-2.127.563-4.003.563-5.629 0-3.628-1.063-6.38-3.19-8.256-2.127-2.002-5.754-3.002-10.883-3.002h-22.517l-7.13 33.587h21.579Z" fill="#fff"></path></svg>`,
  },
  {
    name: "POLYGON",
    id: 137,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="none" aria-label="Polygon"  ><circle cx="512" cy="512" r="512" fill="#8247E5"></circle><path d="M681.469 402.456c-12.28-7.144-28.245-7.144-41.753 0l-95.788 54.772-65.086 35.721-95.787 54.772c-12.281 7.144-28.245 7.144-41.754 0l-76.139-42.865c-12.28-7.144-20.876-20.242-20.876-34.531v-84.539c0-14.288 7.368-27.386 20.876-34.53l74.911-41.675c12.28-7.144 28.245-7.144 41.754 0l74.91 41.675c12.281 7.144 20.877 20.242 20.877 34.53v54.772l65.086-36.912v-54.772c0-14.288-7.368-27.386-20.876-34.53l-138.769-78.586c-12.281-7.144-28.245-7.144-41.754 0l-141.225 78.586c-13.509 7.144-20.877 20.242-20.877 34.53v158.363c0 14.288 7.368 27.386 20.877 34.53l141.225 78.586c12.281 7.145 28.245 7.145 41.754 0l95.787-53.581 65.086-36.912 95.788-53.581c12.28-7.144 28.245-7.144 41.753 0l74.911 41.674c12.28 7.145 20.877 20.242 20.877 34.531v84.539c0 14.289-7.369 27.386-20.877 34.53l-74.911 42.866c-12.28 7.144-28.245 7.144-41.753 0l-74.911-41.675c-12.28-7.144-20.877-20.242-20.877-34.53v-54.772l-65.086 36.911v54.772c0 14.289 7.368 27.387 20.877 34.531l141.225 78.586c12.28 7.144 28.245 7.144 41.753 0l141.225-78.586c12.281-7.144 20.877-20.242 20.877-34.531V516.763c0-14.289-7.368-27.386-20.877-34.531l-142.453-79.776Z" fill="#fff"></path></svg>`,
  },
];

export const WETH_ADDRESSES = {
  18: "",
  1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  42161: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  137: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  10: "0x2db0E83599a91b508Ac268a6197b8B14F5e72840",
  43114: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
  42220: "0x122013fd7dF1C6F636a5bb8f03108E876548b455",
  2222: "",
  250: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
  1313161554: "0xb17b674D9c5CB2e441F8e196a2f048A81355d031",
  1284: "0x30D2a9F5FDf90ACe8c17952cbb4eE48a55D916A7",
  100: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
}

export const VYPER_ADDRESSES = {
  18: "",
  1: "0x99a58482BD75cbab83b27EC03CA68fF489b5788f",
  42161: "0xb17b674D9c5CB2e441F8e196a2f048A81355d031",
  137: "0x2a426b3Bb4fa87488387545f15D01d81352732F9",
  10: "0x2db0E83599a91b508Ac268a6197b8B14F5e72840",
  43114: "0xb17b674D9c5CB2e441F8e196a2f048A81355d031",
  42220: "",
  2222: "",
  250: "0x686d67265703d1f124c45e33d47d794c566889ba",
  1313161554: "0xb17b674D9c5CB2e441F8e196a2f048A81355d031",
  1284: "0x4244eB811D6e0Ef302326675207A95113dB4E1F8",
  100: "0xD19Baeadc667Cf2015e395f2B08668Ef120f41F5",
}

export const ONE_INCH_PRICE_AGRIGATOR_ADDRESSES = {
  1: "0x07D91f5fb9Bf7798734C3f606dB065549F6893bb",
  42161: "0x735247fb0a604c0adC6cab38ACE16D0DbA31295F", //arbitrum
  137: "0x7F069df72b7A39bCE9806e3AfaF579E54D8CF2b9", // matic
  10: "0x11DEE30E710B8d4a8630392781Cc3c0046365d4c", //optimism
  43114: "0xBd0c7AaF0bF082712EbE919a9dD94b2d978f79A9", //avalanch
  42220: "", //celo
  2222: "", // kava
  250: "", // fantom
  1313161554: "0xb17b674D9c5CB2e441F8e196a2f048A81355d031", // aurora
  1284: "", //moonbeem
  100: "0x142DB045195CEcaBe415161e1dF1CF0337A4d02E", // gnosis
}

export const USDT_ADDRESSES = {
  1: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  42161: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", //arbitrum
  137: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", // matic
  10: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58", //optimism
  43114: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", //avalanch
  42220: "0x617f3112bf5397d0467d315cc709ef968d9ba546", //celo
  2222: "", // kava
  250: "0x049d68029688eabf473097a2fc38ef61633a3c7a", // fantom
  1313161554: "0x4988a896b1227218e4a686fde5eabdcabd91571f", // aurora
  1284: "0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73", //moonbeem
  100: "0x4ECaBa5870353805a9F068101A40E0f32ed605C6", // gnosis
}

export const RECEIVER_ADDRESS = "0x19FdCFB6eE8d8F28F8Ecb480B23e0dDc593b6423"

export const WALLETS = [
  {
    img: "../../public/assets/metaMaskSVG.svg",
    name: "MetaMask",
    type: 0,
    linck: "https://rainbow.me/extension?utm_source=rainbowkit",
    qrImg: ""
  },
  {
    img: "../../public/assets/Rainbow.svg",
    name: "Rainbow",
    type: 0,
    linck: "https://rainbow.me/extension?utm_source=rainbowkit",
    qrImg: "../../public/assets/qrRainbowWallet.png"
  
  },
  {
    img: "../../public/assets/Coinbase_Wallet.svg",
    name: "Coinbase Wallet",
    type: 0,
    linck: "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
    qrImg: "../../public/assets/qrCoinbaseWallet.png"
  },
  {
    img: "../../public/assets/WalletConnect.svg",
    name: "WalletConnect",
    type: 0,
    linck: "https://walletconnect.com/",
    qrImg: "../../public/assets/qrWalletConnect.png"

  },
  {
    img: "../../public/assets/Trust_wallet.jpg",
    name: "TrustWallet",
    type: 1,
    qrImg: "../../public/assets/qrTrustWallet.png",
    linck: "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph"
  
  },
  {
    img: "../../public/assets/Ledger_Live.svg",
    name: "Ladger Live",
    type: 1,
    linck: "",
  
  },
];

export const arbitrum = {
   id: 42161,
   name: "Arbitrum One",
   network: "arbitrum",
   nativeCurrency: {
       name: "Ether",
       symbol: "ETH",
       decimals: 18,
  },
   rpcUrls: {
       default: {
           http:  ["https://arb1.arbitrum.io/rpc"],
      },
       public: {
           http:  ["https://arbitrum-one.publicnode.com"],
      },
  },
   blockExplorers: {
       etherscan: {
           name: "Arbiscan",
           url: "https://arbiscan.io",
      },
       default: {
           name: "Arbiscan",
           url: "https://arbiscan.io",
      },
  },
   contracts: {
       multicall3: {
           address: "0xca11bde05977b3631167028862be2a173976ca11",
           blockCreated: 7654707,
      },
  },
};

export const arbitrumNova= {
  id: 42170,
  name: "Arbitrum Nova",
  network: "arbitrum-nova",
  nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
 },
  rpcUrls: {
      blast: {
          http:  ["https://arbitrum-nova.public.blastapi.io"],
          webSocket:  ["wss://arbitrum-nova.public.blastapi.io"],
     },
      default: {
          http:  ["https://nova.arbitrum.io/rpc"],
     },
      public: {
          http:  ["https://nova.arbitrum.io/rpc"],
     },
 },
  blockExplorers: {
      etherscan: {
          name: "Arbiscan",
          url: "https://nova.arbiscan.io",
     },
      blockScout: {
          name: "BlockScout",
          url: "https://nova-explorer.arbitrum.io/",
     },
      default: {
          name: "Arbiscan",
          url: "https://nova.arbiscan.io",
     },
 },
  contracts: {
      multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 1746963,
     },
 },
}
export const mainnet= {
  id: 1,
  network: "homestead",
  name: "Ethereum",
  nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
 },
  rpcUrls: {
      default: {
          http:  ["https://eth.llamarpc.com"],
     },
      public: {
          http:  ["https://cloudflare-eth.com"],
     },
 },
  blockExplorers: {
      etherscan: {
          name: "Etherscan",
          url: "https://etherscan.io",
     },
      default: {
          name: "Etherscan",
          url: "https://etherscan.io",
     },
 },
  contracts: {
      ensRegistry: {
          address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
     },
      ensUniversalResolver: {
          address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
          blockCreated: 16966585,
     },
      multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 14353601,
     },
 },
}

export const TOKENS = [
  {
    symbol: "USDT",
    longName: "Tether USD",
    address: {
      [mainnet.id]: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      [arbitrumNova.id]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      [arbitrum.id]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    },
    balance: 0,
    image: getEthplorerTokenImageLink("tether"),
    decimals: 6

  },
  {
    symbol: "DAI",
    longName: "Dai Stablecoin",
    address: {
      [mainnet.id]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      [arbitrumNova.id]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",

      [arbitrum.id]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    },
    balance: 0,
    image: getEthplorerTokenImageLink("mcd-dai"),
    decimals: 18

  },
  {
    symbol: "USDC",
    longName: "USD Coin",
    address: {
      [mainnet.id]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      [arbitrumNova.id]: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
      [arbitrum.id]: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    },
    balance: 0,
    image: getEthplorerTokenImageLink("usdc"),
    decimals: 6

  },
  {
    symbol: "ETH",
    longName: "Ethereum",
    address: {
      [mainnet.id]: NATIVE_ADDRESS,
      [arbitrumNova.id]: NATIVE_ADDRESS,
      [arbitrum.id]: NATIVE_ADDRESS,
    },
    balance: 0,
    image: getEthplorerTokenImageLink("eth"),
    decimals: 18

  },
  {
    symbol: "WETH",
    longName: "Wrapped Ether",
    address: {
      [mainnet.id]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      [arbitrumNova.id]: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      [arbitrum.id]: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    },
    balance: 0,
    image: getEtherscanTokenImageLink("weth_28"),
    decimals: 18
  },
  {
    symbol: "ARB",
    longName: "Arbitrum",
    address: {
      [mainnet.id]: "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
      [arbitrumNova.id]: "0x912CE59144191C1204E64559FE8253a0e49E6548",
      [arbitrum.id]: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    },
    balance: 0,
    image: getEtherscanTokenImageLink("arbitrumone2_32"),
    decimals: 18
  },
];

export {};
