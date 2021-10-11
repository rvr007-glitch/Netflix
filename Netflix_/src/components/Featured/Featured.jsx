import { InfoOutlined, PlayArrow, PlayArrowOutlined, PlayArrowRounded } from '@material-ui/icons'
import React from 'react'
import './featured.css'
export const Featured = ({ type }) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type == "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">\
                        <option> Genre</option>
                        <option value="Adventure"> Adventure</option>
                        <option value="Comedy"> Comedy</option>
                        <option value="Horror"> Horror</option>
                        <option value="Crime"> Crime</option>
                        <option value="Thriller"> Thriller</option>
                        <option value="Historical"> Historical</option>
                        <option value="Fantasy"> Fantasy</option>
                        <option value="Western"> Western</option>
                        <option value="Sci-fi"> Sci-fi</option>
                        <option value="Drama"> Drama</option>
                        <option value="Documentry"> Documentry</option>
                        <option value="Animation"> Animation</option>
                    </select>
                </div>
            )


            }
            <img className="title" src="https://www.teahub.io/photos/full/18-185020_money-heist-poster-hd.jpg"></img>
            <div className="info">

                <span className="descp">
                    A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history --
                    to print billions of euros
                    in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.
                    The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor.
                    As more time elapses, the robbers prepare for a showdown with the police.


                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>

                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>

                    </button>
                </div>
            </div>
        </div>


    )
}
