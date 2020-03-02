import React from 'react';
import { Paper } from '@material-ui/core';
import useStyles from './styles';

export default function LoremBox() {
  return (
    <Paper variant='outlined'>
      <div className={useStyles().lorem}><div style={{width: '150%', overflow:'auto'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Egestas diam in arcu cursus euismod. Eu non diam
        phasellus vestibulum lorem sed risus. Purus semper eget duis at tellus at. Netus et malesuada fames ac turpis egestas sed.
        Faucibus interdum posuere lorem ipsum dolor sit. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Elit
        pellentesque habitant morbi tristique senectus et netus. Fames ac turpis egestas sed. Risus pretium quam vulputate dignissim.
        Ante in nibh mauris cursus mattis molestie a. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Id
        volutpat lacus laoreet non curabitur gravida. Nunc sed augue lacus viverra vitae congue. Enim praesent elementum facilisis leo
        vel fringilla est. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Quisque egestas diam in arcu. Maecenas
        sed enim ut sem viverra. Ante in nibh mauris cursus mattis molestie a iaculis at.

        <p>Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Enim nec dui nunc mattis enim. Ornare arcu dui
        vivamus arcu. Sit amet porttitor eget dolor morbi. Bibendum ut tristique et egestas quis ipsum. Semper eget duis at tellus
        at urna condimentum mattis pellentesque. Penatibus et magnis dis parturient montes nascetur ridiculus. Eu tincidunt tortor
        aliquam nulla facilisi cras fermentum. Turpis in eu mi bibendum neque egestas congue quisque. Suspendisse interdum
        consectetur libero id faucibus. Aenean sed adipiscing diam donec. Odio facilisis mauris sit amet massa vitae tortor. Enim
        ut tellus elementum sagittis vitae et leo duis ut. Quis ipsum suspendisse ultrices gravida dictum fusce. Nec feugiat in
        fermentum posuere. Non curabitur gravida arcu ac tortor dignissim convallis aenean.</p>

        <p>Aliquam sem et tortor consequat id porta nibh venenatis. Dui id ornare arcu odio ut. Commodo elit at imperdiet dui
        accumsan sit amet. Turpis massa tincidunt dui ut ornare lectus. Egestas diam in arcu cursus. Cursus vitae congue mauris
        rhoncus aenean vel elit scelerisque. Porta non pulvinar neque laoreet suspendisse. Amet massa vitae tortor condimentum
        lacinia. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. At ultrices mi tempus imperdiet nulla malesuada
        pellentesque elit. Libero justo laoreet sit amet cursus sit amet dictum. Ornare aenean euismod elementum nisi quis eleifend
        quam. Condimentum id venenatis a condimentum vitae sapien. Enim facilisis gravida neque convallis a cras. Convallis tellus id
        interdum velit laoreet id donec. Turpis egestas maecenas pharetra convallis posuere morbi. Ipsum dolor sit amet consectetur
        adipiscing elit ut aliquam purus. Pharetra vel turpis nunc eget lorem dolor sed viverra.</p>
      </div></div>
    </Paper>
  );
}
  