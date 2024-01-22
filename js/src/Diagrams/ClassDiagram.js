/**
 * Adds the general palette to the sidebar.
 */
const addClassDiagramPalette = function (sb, expand) {

  // Reusable cells
  var field = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;');
  var attributeField = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=attribute');
  var methodField = new mxCell('+ method(type): type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');
  var _controller = new mxCell('Controller', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');


  field.vertex = true;
  attributeField.vertex = true;
  methodField.vertex = true;
  _controller.vertex = true;

  var divider = new mxCell('', new mxGeometry(0, 0, 40, 8), 'line;html=1;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;');
  divider.vertex = true;

  // Default tags
  var dt = 'uml static class ';

  var fns = [

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 15, 70),
        'html=1;points=[[0,0,0,0,5],[0,1,0,0,-5],[1,0,0,0,5],[1,1,0,0,-5]];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Frame');
    }),

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Lifeline', new mxGeometry(0, 0, 70, 180),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Lifeline');
    }),

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 30, 30),
        'shape=umlDestroy;whiteSpace=wrap;html=1;strokeWidth=3;targetShapes=umlLifeline;'
        );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Destruction');
    }),

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Frame', new mxGeometry(0, 0, 160, 90),
        'shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Frame');
    }),
    
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 50, 180),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlBoundary;'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Boundary Lifeline');
    }),
    
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 30, 180),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlActor;'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'ActorLifeline');
    }),

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 40, 180),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlControl;'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Control Lifeline');
    }),


    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '', new mxGeometry(0, 0, 50, 180),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlEntity;'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Entity Lifeline');
    }),

    sb.addEntry('uml sequence invoke call delegation synchronous invocation activation', function()
		{
	    	var cell = new mxCell('', new mxGeometry(0, 0, 10, 80), 'html=1;points=[];perimeter=orthogonalPerimeter;');
	    	cell.vertex = true;
	    	
			var edge1 = new mxCell('dispatch', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;entryX=0;entryY=0;');
			edge1.geometry.setTerminalPoint(new mxPoint(-70, 0), true);
			edge1.geometry.relative = true;
			edge1.edge = true;

			cell.insertEdge(edge1, false);
			
			var edge2 = new mxCell('return', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=open;dashed=1;endSize=8;exitX=0;exitY=0.95;');
			edge2.geometry.setTerminalPoint(new mxPoint(-70, 76), false);
			edge2.geometry.relative = true;
			edge2.edge = true;
			
			cell.insertEdge(edge2, true);
			
			return sb.createVertexTemplateFromCells([cell, edge1, edge2], 10, 80, 'Synchronous Invocation');
		}),

    sb.addEntry('uml sequence invoke invocation call activation', function()
		{
	    	var cell = new mxCell('', new mxGeometry(0, 0, 10, 80), 'html=1;points=[];perimeter=orthogonalPerimeter;');
	    	cell.vertex = true;
	    	
			var edge = new mxCell('dispatch', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;startArrow=oval;endArrow=block;startSize=8;');
			edge.geometry.setTerminalPoint(new mxPoint(-60, 0), true);
			edge.geometry.relative = true;
			edge.edge = true;
			
			cell.insertEdge(edge, false);
	
			return sb.createVertexTemplateFromCells([cell, edge], 10, 80, 'Found Message');
		}),

    sb.addEntry('uml sequence self call recursion delegation activation', function()
		{
	    	var cell = new mxCell('', new mxGeometry(0, 20, 10, 40), 'html=1;points=[];perimeter=orthogonalPerimeter;');
	    	cell.vertex = true;
	
			var edge = new mxCell('self call', new mxGeometry(0, 0, 0, 0), 'edgeStyle=orthogonalEdgeStyle;html=1;align=left;spacingLeft=2;endArrow=block;rounded=0;entryX=1;entryY=0;');
			edge.geometry.setTerminalPoint(new mxPoint(5, 0), true);
			edge.geometry.points = [new mxPoint(30, 0)];
			edge.geometry.relative = true;
			edge.edge = true;
			
			cell.insertEdge(edge, false);
	
			return sb.createVertexTemplateFromCells([cell, edge], 10, 60, 'Self Call');
		}),
    
   
    sb.createEdgeTemplateEntry('html=1;verticalAlign=bottom;startArrow=oval;startFill=1;endArrow=block;startSize=8;curved=0;rounded=0;', 160, 0, 'dispatch', 'Found Message', null, 'uml generalization extend'),
    sb.createEdgeTemplateEntry('shape=connector;html=2;verticalAlign=bottom;dashed=3', 160, 0, '', 'Found Message', null, 'uml generalization extend'),
    sb.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=open;dashed=1;endSize=8;curved=0;rounded=0;', 160, 0, 'return', 'Return', null, 'uml generalization extend'),

    /* sb.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=block;curved=0;rounded=0;', 160, 0, 'dispatch', 'Message', null, 'uml generalization extend'),
    
    sb.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=open;dashed=1;endSize=8;curved=0;rounded=0;', 160, 0, 'return', 'Return', null, 'uml generalization extend'),
    
    sb.createEdgeTemplateEntry('html=1;verticalAlign=bottom;startArrow=oval;startFill=1;endArrow=block;startSize=8;', 60, 0, 'dispatch', 'Found Message 1', null, 'uml sequence message call invoke dispatch'),
    sb.createEdgeTemplateEntry('html=1;verticalAlign=bottom;startArrow=circle;startFill=1;endArrow=open;startSize=6;endSize=8;', 80, 0, 'dispatch', 'Found Message 2', null, 'uml sequence message call invoke dispatch'),
    sb.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=block;', 80, 0, 'dispatch', 'Message', null, 'uml sequence message call invoke dispatch'),
    */
  ];
  sb.addPaletteFunctions('classDiagram', mxResources.get('classDiagram'), expand || false, fns);
};

module.exports = addClassDiagramPalette;