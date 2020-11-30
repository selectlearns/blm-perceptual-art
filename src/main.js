AFRAME.registerComponent('main', {
  init: function() {

    this.sphereList = createRandomizedList();
    this.preloadSphereListSelectors();
    
    this.nextSphereIndex = 0;
    this.revealInterval = 600;
    this.revealAcceleration = 20;
    this.minRevealInterval = 50;
    
    this.infoCardName = document.getElementById('name');
    this.infoCardAge = document.getElementById('age');
    this.tooltip = document.getElementById('tooltip-card');
    this.tooltipText = document.getElementById('tooltip-text');
    this.tooltipSphere = document.getElementById('tooltip-marker');

    // Avoid the "Sound not loaded yet. It will be played once it finished loading" warnings
    // that happen even with preloading. Force sound to load and only begin when it does.
    const lifeSound = document.getElementById('life');
    lifeSound.oncanplay = () => this.nextSphereTime = 1;
    lifeSound.load();
  },

  tick: function(t) {
    if (!this.nextSphereTime || t < this.nextSphereTime) return;

    this.showSphereByIndex(this.nextSphereIndex);
    this.updateInformationCard(this.nextSphereIndex);
    this.playSphereSound(this.nextSphereIndex);
    
    this.nextSphereIndex += 1;
    if (this.nextSphereIndex < this.sphereList.length) {
      this.revealInterval = Math.max(this.revealInterval - this.revealAcceleration, this.minRevealInterval);
      this.nextSphereTime = t + this.revealInterval;
    } else {
      this.nextSphereTime = null;
      this.revealHashtag();
      this.addTooltipEvents();
    }
  },
  
  updateInformationCard: function(index) {
    const sphere = this.sphereList[index];
    this.infoCardName.setAttribute('value', sphere.name);
    const ageText = sphere.age ? `Age: ${sphere.age}` : '';
    this.infoCardAge.setAttribute('value', ageText);
  },

  playSphereSound: function(index) {
    const sphere = this.sphereList[index].el;
    sphere.components.sound.playSound();
  },

  showSphereByIndex: function(index) {
    const sphere = this.sphereList[index].el;
    sphere.object3D.visible = true;
  },

  revealHashtag: function() {
    document.getElementById('info-card').object3D.visible = false;
    document.getElementById('blm').object3D.visible = true;
  },

  showTooltip: function(elementId) {
    const index = this.sphereList.findIndex(sphere => sphere.id.toString() === elementId);
    const sphere = this.sphereList[index];

    const growBy = (vec3, growthValue = 0) => {
      return {
        x: vec3.x + growthValue,
        y: vec3.y + growthValue,
        z: vec3.z + growthValue
      }
    };

    this.hideTooltip();

    let text = sphere.name;
    text += sphere.age ? `\n\nAge: ${sphere.age}` : '';
    this.tooltipText.setAttribute('value', text);

    const sphereScale = sphere.el.getAttribute('scale');
    const markerScale = growBy(sphereScale, 0.005);
    
    let animation = 'property: scale; dir: alternate; autoplay: true; loop: true; ';
    animation += `from: ${AFRAME.utils.coordinates.stringify(markerScale)}; `;
    animation += `to: ${AFRAME.utils.coordinates.stringify(growBy(markerScale, 0.04))};`
    
    this.tooltipSphere.setAttribute('position', sphere.el.getAttribute('position'));
    this.tooltipSphere.setAttribute('scale', markerScale);
    this.tooltipSphere.removeAttribute('animation');
    this.tooltipSphere.setAttribute('animation', animation);
    this.tooltipSphere.classList.add('clickable');

    this.playSphereSound(index);
    this.tooltip.object3D.visible = true;
    this.tooltipSphere.object3D.visible = true;
  },

  hideTooltip: function() {
    this.tooltip.object3D.visible = false;
    this.tooltipSphere.object3D.visible = false;
    this.tooltipSphere.classList.remove('clickable');
  },

  addTooltipEvents: function() {
    this.sphereList.forEach((sphere) => {
      sphere.el.addEventListener('click', (event) => {
        // event.target.sceneEl.components['main'].showTooltip(event.target.id);
        this.showTooltip(event.target.id);
      });
      sphere.el.classList.add('clickable');
    });
    
    this.tooltipSphere.addEventListener('click', () => {
      this.hideTooltip();
    });
  },

  preloadSphereListSelectors: function() {
    this.sphereList.forEach((sphere) => {
      sphere.el = document.getElementById(sphere.id);
    });
  }

});
